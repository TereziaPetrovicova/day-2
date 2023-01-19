'use strict';

function calculateFactorial(num: number){
    let fact = 1;
for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log(fact);
}

calculateFactorial(10);
// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
//
// - Example: calculateFactorial(5) = 1 * 2 * 3 * 4 * 5 = 120