const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();

// Server & Port
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks";
const PORT = process.env.PORT || 3000;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Mongo Database stuff
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

var db = require("./models");

//API Routes

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
