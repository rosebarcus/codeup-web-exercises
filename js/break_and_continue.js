"use strict";

var oddNumber = 0

while (oddNumber !== "You're never gonna come up with this!") {
    oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    if (oddNumber % 2 === 1 || (oddNumber > 0 && oddNumber < 50)) {break;}

}

for (var i = 1; i < 50; i+=2){
    if(i === oddNumber){
        console.log("Yikes, skipping number: " + oddNumber);
        continue;
    }
    console.log(i);
}
// come back to this after looking at Javier's examples