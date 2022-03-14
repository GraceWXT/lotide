// const assertEqual = function(actual, expected) {
//   actual === expected ? console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
// };

// const eqArrays = function(arr1, arr2) {
//   let result = true;
//   if (arr1.length !== arr2.length) {
//     result = false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         result = false;
//       }
//     }
//   }
//   return result;
// };
const assertArraysEqual = require("../assertArraysEqual");

//Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true/pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false/fail

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true/pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false/fail
