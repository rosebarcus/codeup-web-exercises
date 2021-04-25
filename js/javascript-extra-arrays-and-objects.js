"use strict";

console.log("Hello, World!");
//incomplete exercise
function filterNumbers(input) {
    if(typeof(input !== "boolean") && typeof (input !== "string"))
        return input.sort(function(a, b){
            return a-b;
        });
}

var mixedArray = ["fran", 12, 3, 6, 2, true];

function getOlder () {

}