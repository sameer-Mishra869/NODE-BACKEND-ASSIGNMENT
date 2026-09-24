const express = require('express');
const nodemon = require('nodemon');
const app = express();

app.listen(5000, () => {
console.log('Server is running on port 5000');
});

app.get('/registration', (req, res) => {
    res.send { 'participantName": "Priya", "email": "priya@gmail.com", "eventName": "Code Sprint' };
    req.end();
});

app.post('/registration', (req, res) => {
    res.send('');
    req.end();
});
