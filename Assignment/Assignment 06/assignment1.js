const express = require("express");

const app = express();
const router = express.Router();

function routerLogger(req, res, next) {
    const dateTime = new Date().toLocaleString();

    console.log(`${req.method} ${req.url} ${dateTime}`);

    next();
}
router.use(routerLogger);

router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

app.use("/api", router);

app.listen(3000, () => {
    console.log("Assignment 1 running on http://localhost:3000");
});