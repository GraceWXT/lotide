/*take in two parameters:

The array to work with
The callback (which Lodash calls "predicate")

return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value.
*/

const takeUntil = function(array, terminator) {
  let slicedArray = [];
  for (let element of array) {
    if (!terminator(element)) { //note when terminator returns 0, "", undefined or other falsy values, it will alse keep going
      slicedArray.push(element);
    } else {
      return slicedArray;
    }
  }
  return slicedArray; //in case the terminating condition was never met
};

module.exports = takeUntil;

//Test function:

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

//Test code:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

/*Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]*/
