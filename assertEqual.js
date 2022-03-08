// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Good", "Good");
assertEqual(2, 3);
assertEqual({num: 1, color: "red"}, {num: 1, color: "red"});
assertEqual([1, 1, 1], [1, 1, 1]);