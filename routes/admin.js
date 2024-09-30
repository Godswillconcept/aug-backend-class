const express = require("express");
const path = require("path");
const router = express.Router();
const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

router.get("/dashboard", (req, res) => {
  const adminData =
    JSON.parse(readFileSync(resolve("adminData.json"), "utf8")) || [];
  res.json({ message: "Navigating to Admin dashboard", admins: adminData });
});
router.delete("/dashboard/:id/delete", (req, res) => {
  const { id } = req.params;
  const adminData =
    JSON.parse(readFileSync(resolve("adminData.json"), "utf8")) || [];
  const index = adminData.findIndex((ent) => ent.id === Number(id));
  if (index !== -1) {
    adminData.splice(index, 1);
    writeFileSync(resolve("adminData.json"), JSON.stringify(adminData));
    res.json({ message: "Navigating to Admin dashboard", admins: adminData });
  } else {
    res.json({ message: "record not found" });
  }
});

router.get("/register", (req, res) => {
  res.sendFile(path.resolve("pages", "register.html"));
});

router.post("/register", (req, res) => {
  let admins =
    JSON.parse(readFileSync(resolve("adminData.json"), "utf8")) || [];
  admins.push({ id: admins.length + 1, ...req.body });
  writeFileSync(resolve("adminData.json"), JSON.stringify(admins));
  res.redirect("/api/admin/dashboard");
});

module.exports = router;
