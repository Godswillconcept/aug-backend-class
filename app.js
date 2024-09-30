const express = require("express");
const path = require("path");
const app = express();
const adminRouter = require("./routes/admin");
const vendorRouter = require("./routes/vendor");
const distributorRouter = require("./routes/distributor");
const { urlLogger, dateTimeLogger, authenticate } = require("./middlewares");

const PORT = 3000;

// admin route

// middleware
app.use(express.urlencoded({ extended: true }));
app.use("/api/admin", [urlLogger, authenticate], adminRouter);
app.use("/api/vendor", [dateTimeLogger, urlLogger], vendorRouter);
app.use("/api/distributor", distributorRouter);
// api/admin/dashboard - admin register, login, update profile, check products
// api/vendor/dashboard - vendor
// api/distributor/dashboard - distributor
app.get("/api/user/dashboard", (req, res) => {
  res.json("Navigating to User dashboard");
}); // - user

app.get("*", (req, res) => {
  res.send("Page not found");
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
