const express = require("express");

const app = express();
function logger(req, res, next) {
    const dateTime = new Date().toLocaleString();

    console.log(`${req.method} ${req.url} ${dateTime}`);

    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get("/contact", (req, res) => {
    res.send("Contact Information");
});

app.listen(3000, () => {
    console.log("Assignment 2 running on http://localhost:3000");
});