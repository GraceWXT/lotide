// Test function
// const assertEqual = function(actual, expected) {
//   actual === expected ? console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
// };
const assertEqual = require("../assertEqual");
const head = require("../head")

//Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);