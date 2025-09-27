const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "CI/CD demo working 🚀" });
});

app.get("/randomNumber", (req, res) => {
  res.json({ message: Math.random() });
});

module.exports = app;
