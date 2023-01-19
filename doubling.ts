'use strict';

let baseNumber = 123;
let multiplier = 2;
let result = doubleNumber(baseNumber, multiplier);

function doubleNumber (baseNumber: number, multiplier: number): number {
    return baseNumber * multiplier;
}

console.log(result);







// - Create a number variable named `baseNumber` and
//   assign it the value of `123`
// - Create a function called `doubleNumber()` that doubles
//   its number input parameter and returns that doubled value
// - Log the result of `doubleNumber(baseNumber)` to the console