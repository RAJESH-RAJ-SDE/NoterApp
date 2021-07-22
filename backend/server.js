const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
// API end Point 1

app.get("/", (req, res) => {
  res.send("API is Running......!");
});

// send JSON from FrontEnd 2
app.get("/api/notes", (req, res) => {
  res.json(notes);
  //res.json({ 1: "Raj" });
});

// // single Object get FromEnd Point 3
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  //console.log(req.params);
  res.send(note);
});

// DOTENV configure File
const PORT = process.env.PORT || 5000;
app.listen(3000, console.log(`server started on PORT ${PORT}`));
