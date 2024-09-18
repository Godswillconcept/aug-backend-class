const { readFileSync } = require("fs");
const http = require("http");
const path = require("path");

// console.log(http);
// console.log(`methods: ${http.METHODS}`);
// http methods
// get, post, put, patch, delete,

// https://fakestoreapi.com/products
// get method - retrieve data
// https://fakestoreapi/com/products
// post method - send data
// https://fakestoreapi.com/products/1
// get method
// https://fakestoreapi.com/products/1
// put method - modify/update data - passing updated data
// https://fakestoreapi.com/products/1
// patch method - modify/update data - passing updated data
// https://fakestoreapi.com/products/1
// delete method - delete data - won't be present when retrieving all the data
// https://fakestoreapi.com/products/1

// www.goal.com
// www.goal.co.uk

// console.log(http.STATUS_CODES);

// create server

// http.createServer(callback )
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let index = path.resolve("pages", "index.html");
    let content = readFileSync(index, { encoding: "utf-8" });
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("User");
    res.end(content);
    // res.end(`<h1>Homepage</h1>`);
  } else if (req.url === "/about") {
    let about = path.resolve("pages", "about.html");
    let content = readFileSync(about, { encoding: "utf-8" });
    res.writeHead(200, { "content-type": "text/html" });
    res.end(content);
  } else {
    let notFound = path.resolve("pages", "not-found.html");
    let content = readFileSync(notFound, { encoding: "utf-8" });
    res.writeHead(200, { "content-type": "text/html" });
    res.end(content);
  }
});

server.listen(5000, () => {
  console.log("server is running on port 5000 \n http://localhost:5000");
});

// console.log(http.STATUS_CODES);

// http:// jumia.store.ng/admin
// timeout 5 sec
//

// console.log("Start fetching");
// console.log("Fetching");
// setTimeout(() => {
//   console.log("Data fetched successfully");
// }, 3000);
// console.log('Testing');