const express = require("express");
const { Router } = express;
const router = Router();

router.get("/dashboard", (req, res) => {
  res.json({ message: "Navigating to Vendor dashboard" });
});

router.post("/register", (req, res) => {
  res.json(req.body);
});

module.exports = router;
