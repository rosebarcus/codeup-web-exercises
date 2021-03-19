"use strict"
// Part 1
console.log("Hello from external Javascript");

alert ("Welcome to my website");
// Part 2
var userFaveColor = prompt ("What's your favorite color?");

alert("Wow, " + userFaveColor + " is my favorite color, too!");

// Part 3.1

var lilMerDays = parseFloat(prompt("How many days are you renting The Little Mermaid?"));

var broBearDays = parseFloat(prompt("How many days are you renting Brother Bear?"));

var hercDays = parseFloat(prompt("How many days are you renting Hercules?"));

var rentalRate = parseFloat(prompt("How much is it to rent a movie for one day?"));

var rentalTotal = (lilMerDays + broBearDays + hercDays) * rentalRate;

alert("Your total is: $" + rentalTotal.toFixed(2) + " Have a dandy day!");

part 3.2

var googleRate = parseFloat(prompt("how much does Google pay per hour?"));
var googleHours = parseFloat(prompt("how many hours did you work for google?"));

var amazonRate = parseFloat(prompt("how much does Google pay per hour?"));
var amazonHours = parseFloat(prompt("how many hours did you work for google?"));

var facebookRate = parseFloat(prompt("how much does Google pay per hour?"));
var facebookHours = parseFloat(prompt("how many hours did you work for google?"));

alert("Wow, you got paid $" + (
    (googleHours * googleRate)+(amazonHours * amazonRate)+(facebookHours * facebookRate)
).toFixed(2) + ", That was hard work!");

//Part 3.3

var classRoom = confirm("Is there room in Miss Frizzle's class?");
var noScheduleConflict = confirm("Can you do class at 9am");

alert("You can take this class: " + (classRoom && noScheduleConflict));

// Part 3.4

var isOfferValid = confirm("Are we running that promo on Beef Jerky?");
var memberIsPremium = confirm("Does the customer have their Costco Card?");
var amountBought = parseFloat(prompt("How Beef Jerky Sticks are they buying?"));

aleart("Customer qualifies for promoL " + (((memberIsPremium || amountBought >= 2) && isOfferValid) && amountBought >= 1ls) + ".");


