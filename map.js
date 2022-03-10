//The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let result = [];
  for (let element of array) {
    result.push(callback(element));
  }
  return result;
};

const results1 = map(words, word => word[0]);
console.log(results1);


//Test functions
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
assertArraysEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);
assertArraysEqual(map(["pig", "latin"], string => string.slice(1)+string[0]+"ay"), ["igpay", "atinlay"]);
assertArraysEqual(map(["camel case", "lighthouse labs"], string => {
  let convertedString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      convertedString += string[i+1].toUpperCase();
      i++;
    } else {
      convertedString += string[i];
    }
  }
  return convertedString;
}), ["camelCase", "lighthouseLabs"])


console.log(map([], x => x * 2))
console.log(map([""], string => string.slice(1)+string[0]+"ay"))
console.log(map([""], string => {
  let convertedString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      convertedString += string[i+1].toUpperCase();
      i++;
    } else {
      convertedString += string[i];
    }
  }
  return convertedString;
}))