const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍🏻 Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};
//A function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function(string) {
  let count = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (count[letter] === undefined) {
        count[letter] = 1;
      } else {
        count[letter]++;
      }
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));
/* Expected output
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
})
*/
assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("lighthouse in the house").i, 2);
assertEqual(countLetters("lighthouse in the house").g, 1);
assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").t, 2);
assertEqual(countLetters("lighthouse in the house").o, 2);
assertEqual(countLetters("lighthouse in the house").u, 2);
assertEqual(countLetters("lighthouse in the house").s, 2);
assertEqual(countLetters("lighthouse in the house").e, 3);
assertEqual(countLetters("lighthouse in the house").n, 1);