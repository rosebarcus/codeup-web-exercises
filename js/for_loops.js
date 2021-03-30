"use strict";
var num = 7;

console.log(num + " * 1 = " + num);
console.log(num + " * 2 = " + num * 2);
console.log(num + " * 3 = " + num * 3);

for (var multiplier = 1; multiplier <=10; multiplier++) {
    console.log(num + " x " + multiplier + " = " + num * multiplier);

    function showMultiplicationTable(num) {
        for(var multiplier = 1; multiplier <=10; multiplier++);
    }
}


for(var i = 0; i <10; i++) {
    var random = Math.floor(Math.random() * 181) + 20
    if(random % 2 === 0){
    console.log(random + " is even.");
    } else {
    console.log(random + " is odd");
    }
}

//review what Javier pushes - look at his example of ternary operator



/*this is work you did in the breakout room, unable to get the desired result from the for loops exercise identifying
 odd and even numbers.*/

function randomNum (min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);


}
console.log(randomNum)


var output = ""

for(var i = 1; i <10; i++) {
    for (var j = 1; j <= i; j++) {
    output += i + "";
    }
    console.log(output);
    output = "";
}

for(var i = 100; i > 0; i = i - 5) {
    console.log(i);
}

