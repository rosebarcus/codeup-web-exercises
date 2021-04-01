"use strict";

var oddNumber = 0

/*while (oddNumber !== "You're never gonna come up with this?") {

}
while (oddNumber % 2 !== 1 || (oddNumber > 0 && oddNumber <50)) {
    oddNumber = parseFloat(prompt("Please give me an odd number between 1 and 50."));

}*/

var oddNumber = parseInt(prompt("Give me an odd number between 1 and 50, please?"));

while(true){
    if (oddNumber % 2 !== 1 || (oddNumber > 0 && oddNumber <50)) {

    }
    oddNumber = parseInt(prompt("Give me an odd number between 1 and 50, please?"));
}
for (var i =1; i <= 50; i = 1 + 2){
    if (i === oddNumber) {
        console.log("Yikes, skipping number: " + oddNumber);
        continue;
        }
    console.log(i);
}

// come back to this after looking at Javier's examples