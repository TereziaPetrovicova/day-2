'use strict';

let arr: number[] = [0, 1, 2, 3, 4, 5];
let sum = 0;

arr.forEach((element) => {
  sum += element;
});

console.log(sum);
// Write a function called `sum()` that returns the sum of numbers
// from zero to the given parameter
//
// Example: sum(5) = 0 + 1 + 2 + 3 + 4 + 5 = 15