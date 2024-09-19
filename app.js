const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const index = path.resolve("pages", "index.html");
const about = path.resolve("pages", "about.html");
const notFound = path.resolve("pages", "not-found.html");
const contactUs = path.resolve("pages", "contact-us.html");
app.get("/", (req, res) => {
  // res.write(`<h1>Homepage with express</h1>`);
  res.status(200).sendFile(index);
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(about);
});

app.get("/contact-us", (req, res) => {
  res.status(200).sendFile(contactUs);
});

app.get("*", (req, res) => {
  res.status(404).sendFile(notFound);
});

app.listen(port, () => {
  console.log(`Server listening at port:${port} http://localhost:${port}`);
});

console.log(
  new URL(
    "http://localhost:3000/contact-us?name=Olatunji+Abass&email=olatunjiabass01%40gmail.com&message=Testing..."
  )
);
