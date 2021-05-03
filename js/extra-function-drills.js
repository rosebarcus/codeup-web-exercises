"use strict";

console.log("Hey, Rose. Get some keyboard time in!");

var number = 7;
function isOdd(number) {
    if (number % 2 === 0) {
        return ("The number is even");
    } else {
        return "The number is odd"
    }
}

console.log(isOdd(number));