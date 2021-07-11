"use strict";
/*Your solution, which is perfectly good*/
/*console.log("Hello, Rose!");

function fizzBuzz () {
    for (var i = 0; i < 30; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

fizzBuzz(30);*/

(() => {

    /**
     *
     * Often in programming interviews, you may be asked to solve a problem called “FizzBuzz.” FizzBuzz is a test of your ability to
     * use conditional logic with a loop that counts up by one with every iteration. The challenge asks that you log the word “Fizz” if
     * a number is evenly divisible by 3, “Buzz” if a number is evenly divisible by 5, “FizzBuzz” if it is divisible by both 3 and 5,
     * and finally the number if it is not divisible by 3 or 5.
     *
     * This morning, I’d like you to write FizzBuzz in JavaScript using a for loop that goes until the number 30.
     *
     */
    const fizzBuzz = numTil => {
        for (let x = 1; x <= numTil; x++) {
            if (x % 3 === 0 && x % 5 === 0) {
                console.log("FizzBuzz");
            } else if (x % 3 === 0) {
                console.log("Fizz");
            } else if (x % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(x);
            }
        }
    }

    fizzBuzz(30);
})();

/*function returnsSeven (num) {
    if (num === 7);
    return "lucky number " + num;
} */
//david's solution:
const returnSeven = () => 7;

console.log(returnSeven());

function multiplesOfFive(num){
    if(x % 5 === 0)
        return num;
    }


    // David's solution const mutiplyByFive = num => typeof num === "number" ? num * 5 :0;
