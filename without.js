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

/*Pseudo Code:
let new array = []
loop through each item in sourse
  if item is not included in itemsToRemove
  push to new array
return new array
*/

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

module.exports = without;

//Test codes
//without([1, 2, 3], [1]) // => [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);