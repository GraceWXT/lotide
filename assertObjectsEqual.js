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

//take in two objects and console.log an appropriate message to the console.
const assertObjectEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2)) {
    console.log(`👍🏻 Assertion Passed: ${JSON.stringify(obj1)} === ${JSON.stringify(obj2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${JSON.stringify(obj1)} !== ${JSON.stringify(obj2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectEqual(cd, dc);
assertObjectEqual(cd, cd2);