const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
// console.log(app);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages", "index.html"));
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api/products", (req, res) => {
  res.json({
    products: [
      { name: "Phone", price: "12345" },
      { name: "Book", price: "67890" },
      { name: "Pencil", price: "111213" },
    ],
  });
});

const data = [];

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("pages", "contact-us.html"));
});

app.post("/contact", (req, res) => {
  res.json({ data: req.body });
  data.push(req.body);
  //   console.log(data);
});

// request params

// app.get("/api/:id/product", (req, res) => {
//   //   console.log(req.params);
//   const { id } = req.params;
//   console.log(id);
// });
// app.get("/api/users/:slug/detail", (req, res) => {
//   //   console.log(req.params);
//   let { slug } = req.params;
//   console.log(slug);
// });

// app.get("/api/products/:id/detail/:vendor", (req, res) => {
//   let { id, vendor } = req.params;
//   console.log(id);
//   console.log(vendor);
// });

// request query
// app.get("/api/users?", (req, res) => {
//   //   console.log(req.query);
//   const { search, gender, age } = req.query;
//   console.log(search);
//   console.log(gender);
//   console.log(age);
// });

// api/users/578/detail?cart=book&cart=omo&cart=detergent

app.get("/api/users/:id/detail?", (req, res) => {
  console.log(req.query);
  console.log(req.params);
});

// api/books/things-fall-apart/detail?author=chinua+achebe&year=1888&reader+count=12000

app.get("/api/books/:slug/detail?", (req, res) => {
  console.log(req.query);
  console.log(req.params);
});
app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server listening at PORT:${3000}. \nhttp://localhost:${PORT}`);
});
