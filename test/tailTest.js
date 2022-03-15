// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return empty array when the input array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return empty array when the input array has only one element", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("should returns the 'tail' of an array: everything except for the first item (head) of the provided array", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("should not modify the array that is passed in", () => {
    const array = [1, 2, 3];
    tail(array);
    assert.deepEqual(array, [1, 2, 3]);
  });
});

// //Original test code
// assertEqual(tail([]).length, 0);
// console.log(tail([]));
// assertEqual(tail([1]).length, 0);
// console.log(tail([1]));
// assertEqual(tail([0, 1, 2]).length, 2);
// assertEqual(tail([0, 1, 2])[0], 1);
// assertEqual(tail([0, 1, 2])[1], 2);
// console.log(tail([0, 1, 2]));

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!