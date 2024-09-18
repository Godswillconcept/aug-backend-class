const url = require("url");

// console.log(url);
const myUrl = new URL("/in/godswillconcept", "https://linkedin.com");
// https://linkedin.com/in/godswillconcept
// console.log(myUrl);

const apiUrl = new URL(
  "/api/products/?product=apple&price=3000&type=red#c4",
  "http://123:abass@localhost:3000"
);
// console.log(apiUrl);
// "https://www.jumia.com.ng/catalog/?q=oraimo+power+bank"
const jumiaAPi = new URL(
  "/catalog/?product=oraimo+power+bank",
  "https://www.jumia.com.ng"
);
// console.log(jumiaAPi);

const emailUrl = new URL("https://admin:abass@alusofttechnologies.com");
// console.log(emailUrl);

const sample = new URL("https://www.google.com/?search=world+wide+web&value=www&q=prisma&choice=false&password=12345");

const test =  new URL('http://127.0.0.1:5500/?fname=olatunji&lname=Abass&lname=Adewale');
// console.log(sample.searchParams.get('q'));
// console.log(sample.searchParams.get('value'));
// console.log(sample.searchParams.getAll('q'));
console.log(test.searchParams.getAll('lname'));