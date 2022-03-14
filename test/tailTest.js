const assertEqual = require("../assertEqual");
const tail = require("../tail");


//test code
assertEqual(tail([]).length, 0);
console.log(tail([]));
assertEqual(tail([1]).length, 0);
console.log(tail([1]));
assertEqual(tail([0, 1, 2]).length, 2);
assertEqual(tail([0, 1, 2])[0], 1);
assertEqual(tail([0, 1, 2])[1], 2);
console.log(tail([0, 1, 2]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!