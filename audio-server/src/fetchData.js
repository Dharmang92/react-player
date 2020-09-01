const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config({ path: "../.env" });

let folder = process.env.DIRECTORY || "D:/Music/";
const fs = require("fs");
const arr = [];

fs.readdir(folder, (err, files) => {
    try {
        files.forEach((file) => (file.endsWith("mp3") ? arr.push(file) : null));
    } catch (err) {
        console.log(err);
    }
});

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.setHeader("Content-Type", "application/json");
    res.json({ songs: arr });
});

app.get("/:name", (req, res) => {
    if (req.params.name == "") {
        return;
    } else {
        // res.setHeader("Content-Type", "audio/mpeg");
        res.sendFile(folder + req.params.name);
    }
});

app.use(bodyParser());
app.post("/", (req, res) => {
    folder = req.body.folder;
    console.log(req.body.folder);
    res.send("success");
});

app.listen(3001, () => {
    console.log("server listening on http://localhost:3001/");
});
