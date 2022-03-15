// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //if both values are arrays
        if (!eqArrays(object1[key], object2[key])) { //if the two value arrays are not equal
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;

//Assertion function
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

/*Step 2: Primitives As Values - Test Code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
*/

//Step 3: Arrays As Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

// let d = ["2", 3];
// console.log(typeof d);