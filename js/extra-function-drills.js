"use strict";

console.log("Hey, Rose. Get some keyboard time in!");

var number = 20;
function isOdd(number) {
    if (number % 2 === 0) {
        return ("The number is even");
    } else {
        return "The number is odd"
    }
}

console.log(isOdd(number));

function isEven (number) {
    if (number % 2 ===0){
        return ("The number is even");
    } else {
        return "the number is odd"
    }
}

console.log(isEven(number));

var input = prompt("Please enter a message");

function identity(input) {
    if(input === input) {
        return alert("you entered " + input);
    }
}



