/*Pseudo Code:
let result = true
if length is not the same
result is false
if the length of two arrays are the same
  Loop through each element in the two arrays
    if any element is not equal
    result is false
return result
*/
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

module.exports = eqArrays;