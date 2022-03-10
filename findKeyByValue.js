//requirement: takes in an object and a value.
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  //return undefined;
};

//Assertion function
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

//Test code:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const testObject = {
  a: 1,
  b: 2,
  c: 1,
  d: 0
};

assertEqual(findKeyByValue(testObject, 1), "a");
assertEqual(findKeyByValue(testObject, 3), undefined);