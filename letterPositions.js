const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter !== " ") {
      if (results[letter] === undefined) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};

//Assertion functions
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

//Test Code:
assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["o"], [4]);

//result object for "lighthouse in the house":
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

console.log(JSON.stringify(letterPositions("lighthouse in the house")));