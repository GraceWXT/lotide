// const assertEqual = function(actual, expected) {
//   actual === expected ? console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
// };

const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍🏻 Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
};

//Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true/pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false/fail

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true/pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false/fail