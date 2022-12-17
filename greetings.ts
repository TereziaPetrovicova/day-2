'use strict';

let nameToGreet = "Green Fox";
let greeting = "Greetings, dear "
function Greet(greeting: string, nameToGreet: string ) : string {
    return greeting + nameToGreet + '!';
}
 console.log(greeting + nameToGreet + '!');

// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet()` that greets its input parameter
//     - It prints a greeting message e.g. `Greetings dear Green Fox`
//     - Handle the case when no parameters are given by printing the
//       `Please provide a name to greet` message
// -  Greet `nameToGreet`