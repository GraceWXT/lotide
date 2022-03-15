// const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("Should return an empty array for arrays with one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("Should return an empty array for arrays with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("For arrays with odd number of elements, an array containing a single middle element should be returned.", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("For arrays with an even number of elements, an array containing the two elements in the middle should be returned", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

// // Original TEST CODE
// // middle([1]) // => []
// // middle([1, 2]) // => []
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// // middle([1, 2, 3]) // => [2]
// // middle([1, 2, 3, 4, 5]) // => [3]
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// // middle([1, 2, 3, 4]) // => [2, 3]
// // middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);