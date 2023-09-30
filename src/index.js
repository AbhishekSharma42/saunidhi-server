const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/About", (req, res) => {
    res.send("About us");
});

app.get("/Contact", (req, res) => {
    res.send("Contact Us");
});

app.listen(PORT, () => {
    console.log(`Server start on post ${PORT}`);
})
