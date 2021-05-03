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

function isFive(input) {
    if (typeof input === "number" && input === 5)
        return "Yup, that's the number 5"
    else {
        return "hmmm, that is not the number 5";
    }
}


console.log(isFive(3));

function addFive(input) {
    if (typeof input === "number")
        return "You entered " + input + " here it is, but I added five: " + (input + 5)
    else {
        return "Not sure what you're trying to do there, bud.";
    }
}

console.log(addFive("Hey"));

