const express = require("express");
const path = require('path');
const router = express.Router();
const {urlLogger} = require('../middlewares')

router.get("/dashboard", urlLogger, (req, res) => {
  res.json({ message: "Navigating to Admin dashboard" });
});

router.get("/register", (req, res) => {
  res.sendFile(path.resolve("pages", "register.html"));
});

router.post("/register", (req, res) => {
  res.json(req.body);
});

module.exports = router;
