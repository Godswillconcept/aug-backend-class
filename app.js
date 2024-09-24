const express = require("express");
const app = express();
const path = require("path");
const {urlLogger, dateTimeLogger, authenticate} = require("./middlewares");
const PORT = 3000;

// middlewares
// app.use(urlLogger); // invoking the middlewares globally, such that all requests will use the middleware
// app.use(dateTimeLogger);
app.use([urlLogger, dateTimeLogger]);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const users = [
  { name: "John", role: "admin" }, // return res.json({message: "I am admin"})
  { name: "Smith", role: "user" }, // return res.json({message: "I am a member"})
];

app.get("/api/users/login", authenticate, (req, res) => {
  res.json({ message: "Processing user login form" });
});

app.get("/api/courses", (req, res) => {
  res.json({ message: "fetching courses" });
});

app.get("/",  (req, res) => {
  res.sendFile(path.resolve("pages", "index.html"));
});
app.get("/login", (req, res) => {
  res.json({ message: "Login Successfully" });
});
app.get("/api/testing", (req, res) => {
  res.json({ message: "API testing route defined" });
});
app.get("/api/users/:id/detail", (req, res) => {
  res.json({
    id: 1,
    name: "Abass",
    email: "9qS0U@example.com",
    role: "admin",
  });
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("pages", "about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("pages", "contact-us.html"));
});

app.post("/contact", (req, res) => {
  res.json({ data: req.body });
});

app.get("/api", (req, res) => {
  res.json({ message: "APi route defined" });
});

app.get("/api/products", (req, res) => {
  res.json({
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ],
  });
});

app.get(
  "/api/users/:name/detail/:level/:course/overview/:topic/exercises/:exercise",
  (req, res) => {
    const { name } = req.params;
    console.log(name);
    res.json(req.params);
  }
);

app.get("/api/products/search?", (req, res) => {
  console.log(req.query);
  res.json(req.query); // {"key": "value"}, [{"key": "value"}, {"key": "value"}]
});

app.get("/api/products/:id/detail/search?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.json([{ query: req.query }, { params: req.params }]);
});

const products = [
  { id: 1, name: "Phone", price: "11000" },
  { id: 2, name: "Laptop", price: "50000" },
  { id: 3, name: "Ipad", price: "20000" },
  { id: 4, name: "Watch", price: "5000" },
  { id: 5, name: "Headphones", price: "10000" },
  { id: 6, name: "Power Bank", price: "8000" },
  { id: 7, name: "Bag", price: "15000" },
  { id: 8, name: "Mouse", price: "2000" },
  { id: 9, name: "Keyboard", price: "5000" },
  { id: 10, name: "Monitor", price: "40000" },
];

app.delete("/api/products/:id/delete", (req, res) => {
  const { id } = req.params;
  let deletedProduct = products.find((product) => product.id === Number(id));
  res.json({ message: "Product deleted successfully", data: deletedProduct });
});

app.get("*", (req, res) => {
  res.send(`<h1>Oops! Page not found</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server serving at port:${PORT}\nhttp://localhost:${PORT}`);
});
