const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const registrationsFile = path.join(__dirname, 'registrations.json');

app.use(express.json());

app.post('/registrations', (req, res) => {
    const { participantName, email, eventName } = req.body;

    if (!participantName || !email || !eventName) {
        return res.status(400).json({
            success: false,
            message: 'participantName, email and eventName are required'
        });
    }

    fs.readFile(registrationsFile, 'utf8', (readError, fileData) => {
        if (readError) {
            return res.status(500).json({ success: false, message: 'Unable to read registrations' });
        }

        let registrations;

        try {
            registrations = JSON.parse(fileData);
        } catch (parseError) {
            return res.status(500).json({ success: false, message: 'Registrations file is invalid' });
        }

        const duplicate = registrations.some(
            (registration) => registration.email === email && registration.eventName === eventName
        );

        if (duplicate) {
            return res.status(409).json({
                success: false,
                message: 'Already registered for this event'
            });
        }

        const nextId = registrations.reduce(
            (highestId, registration) => Math.max(highestId, registration.id || 0),
            0
        ) + 1;
        const registration = { id: nextId, participantName, email, eventName };
        registrations.push(registration);

        fs.writeFile(registrationsFile, JSON.stringify(registrations, null, 2), (writeError) => {
            if (writeError) {
                return res.status(500).json({ success: false, message: 'Unable to save registration' });
            }

            return res.status(201).json({
                success: true,
                message: 'Registration successful',
                data: registration
            });
        });
    });
});

app.get('/registrations', (req, res) => {
    fs.readFile(registrationsFile, 'utf8', (readError, fileData) => {
        if (readError) {
            return res.status(500).json({ success: false, message: 'Unable to read registrations' });
        }

        try {
            const registrations = JSON.parse(fileData);
            return res.json({
                success: true,
                count: registrations.length,
                data: registrations
            });
        } catch (parseError) {
            return res.status(500).json({ success: false, message: 'Registrations file is invalid' });
        }
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
