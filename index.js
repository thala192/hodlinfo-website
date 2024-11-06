const dotenv = require("dotenv"); // Corrected from 'dotnev' to 'dotenv'
const express = require("express");
const connectDb = require("./src/config/db");

const { getTickers } = require("./src/controllers/tickerController");
require("dotenv").config();
// Ensure dotenv is configured to load environment variables
connectDb();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("src/view"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/view/index.html");
});

app.get("/api/tickers", getTickers);

app.listen(port, () => {
  console.log("app is running on port: " + port);
});
