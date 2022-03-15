# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gracewxt/lotide`

**Require it:**

`const _ = require('@gracewxt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: a function for asserting that two arrays are equal
* `assertEqual()`: a function that compare the two values it takes in and print out a message telling us if they match or not
* `assertObjectsEqual()`: A function that takes in two objects and log an appropriate message (assertion) to the console.
* `countLetters()`: A function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly()`: a function that when given an array and an object, it will return an object containing counts of everything that the input object listed.
* `eqArrays()`: a function that compares two arrays and returns a boolean
* `eqObjects()`: A funciton that takes in two objects and returns true or false, based on a perfect match.
* `findKey()`: A function that will scan the object and return the first key which contains the given value. Return undefined if no key with that given value is found.
* `findKeyByValue()`: A function that scan the value of each key in an object, and return the first key for which the callback returns a truthy value
* `head()`: a function that returns the first element in an array
* `letterPositions()`: a function which will return all the indices (zero-based positions) in the string where each character is found.
* `map()`: A map function that will return a new array based on the results of the callback function.
* `middle()`: a function that takes in an array and return the middle-most element(s) of the given array.
* `tail()`: a function that returns the tail of an array: everything except for the first item (head) of the provided array, without modifying the array passed in
* `takeUntil()`: A function that return a slice of the given array with elements taken from begining, until the callback returns a truthy value
* `without()`: a function that returns a subset of a given array, removing unwanted elements. Not modifying the original array.
