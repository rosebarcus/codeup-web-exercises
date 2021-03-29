/*
var slices = 8;
while (slices >0) {
    console.log("I'll have a slice");
    slices = slices -1;
    if (slices >1) {
        console.log("Now there's ") + slices " slices left");
    } else {
        console.log("Now there's " + slices + " slices left!");
    }
    if (slices <= 2) {
        console.log("We're almost out of pizza");
    }
    console.log("Now there's " + slices + " slices left!");
}

console.log("Sorry, there's no more pizza :(");
*/
var counter = 8;
while (counter >= 0);{
    console.log(counter);
    counter = counter - 1;
}

// Pseudocode

// Ask the user for input
// Get the user input
// Declare a user input variable
// Store the user input in the variable
//Declare a variable to store the total (accumulator)
// Add the cost of the new item to the total
// Keep storing the new totals in the accumulator variable
// Tell the user how to end the program (sentinel value)
// Loop back around and do it all over again, until the user tells us to stop

var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
alert("The price of your item was " + priceOfItem);
var totalCost = priceOfItem;
var userInput = "";
// create a sentinel value
while(userInput !== "STOP") {
    userInput = prompt("Enter the price of your next item. \r\n\ Enter Stop when you are done")
    if (userInput === "STOP") {
        alert("Okay, your final total is " + totalCost);
    } else {
        priceOfItem = parseFloat(userInput);
        totalCost = totalCost + priceOfItem;
        alert("Your total is " + totalCost.toFixed(2));
    }
1
}