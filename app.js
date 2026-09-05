const express = require("express");
const validateDecimalParam = require("./validateDecimal");
const app = express();

// Endpoint para converter decimal para binário
app.get("/to-binary/:decimal", validateDecimalParam, (req, res) => {
  const binary = req.decimal.toString(2);
  res.json({ decimal: req.decimal, binary });
});

// Endpoint para converter decimal para hexadecimal
app.get("/to-hex/:decimal", validateDecimalParam, (req, res) => {
  const hex = req.decimal.toString(16).toUpperCase();
  res.json({ decimal: req.decimal, hex });
});

module.exports = app;

