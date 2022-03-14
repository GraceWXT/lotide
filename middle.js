//Requirement: take in an array and return the middle-most element(s) of the given array.
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.

/* Pseudo Code:
let n = array.length
let middle = []
if n < 3, return middle
if n is odd, push array[n/2-1(or floor)] to middle
if n is even, push array[n/2] and [n/2-1] to middle
return middle
*/

// ACTUAL FUNCTION
const middle = function(array) {
  let n = array.length;
  let middle = [];
  if (n > 2) {
    if (n % 2 === 1) {
      middle.push(array[Math.floor(n / 2)]);
    } else {
      middle.push(array[n / 2 - 1], array[n / 2]);
    }
  }
  return middle;
};

module.exports = middle;