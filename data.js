const user = {
  name: "John Doe",
  age: 12,
  location: "UK",
};

console.log(user);

// sum subtraction, multiply, modulus
const numSum = (...nums) => {
  return nums.reduce((tot, val) => tot + val);
};

const numSubtract = (...nums) => {
  return nums.reduce((tot, val) => tot - val);
};

const numMultiply = (...nums) => {
  return nums.reduce((tot, val) => tot * val);
};

const numModulus = (num, mod) => num % mod;

const stringSearch = (sen, str) => {
  return sen.search(str);
};

module.exports = { user, numSum, numSubtract, numMultiply, numModulus, stringSearch };
// console.log(module.exports);