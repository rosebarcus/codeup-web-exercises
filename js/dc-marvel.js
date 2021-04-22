/*
var accessTheDOM = document.getElementById("dc");
var showMe = accessTheDOM.innerHTML;
alert(showMe);*/

var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var dc = document.getElementById("dc");
dc.innerHTML = dc.innerHTML + "Animated Universe";
/*var output = like.innerHTML + ' ' + dc.innerHTML;*/
//^^^ this line is keeping my code from being the right colors I tell it to be for some reason?
/*
alert(output);*/

var marvel = document.getElementById("marvel");
marvel.setAttribute('class', 'hotpink');
marvel.innerHTML = marvel.innerHTML + ' Cinematic Universe';

dc.setAttribute('class', 'hotpink');

var hotPinks = document.getElementsByClassName('hotpink');
// returns a nodeList
/*hotPinks[0].style.color = 'blue';
hotPinks[1].style.color = 'green';
hotPinks[1].style.fontFamily = 'sans-serif';*/

for(var i = 0; i < hotPinks.length; i++) {
    hotPinks[i].style.color = 'green';
    hotPinks[i].style.fontFamily = 'sans-serif';
}

//CSSOM

var submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function() {
    submitButton.onclick = document.getElementById("colorPreference");
    var colorInput = document.getElementById("colorPreference");
    var paragraphs = document.getElementsByTagName("p");
    colorPreference = colorInput.value;
    alert(colorPreference);
    for(var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
    colorInput.value = "";
}
var theHulk = document.getElementById("theHulk");
var hulkState = theHulk.getAttribute("data-state");
var hulkStrength = theHulk.getAttribute("data-strength");
var hulkIntelligence = theHulk.getAttribute("data-intelligence");
alert("The Hulk is currently in " + hulkState + "state. His strength is " + hulkStrength + " and his intelligence is" +
    " " + hulkIntelligence);
    var transformButton = document.getElementById("transformHulk");
    transformButton.onclick = function () {
    var hulkState = theHulk.getAttribute("data-state");
    if(hulkState === "The Hulk") {
        theHulk.setAttribute("data-state", "Bruce Banner")
    } else {
        theHulk.setAttribute("data-state", 'The Hulk');
    }
    var hulkStrength = theHulk.getAttribute("data-strength");
    if(hulkState=== "super") {
        theHulk.setAttribute("data-strength", "normal")
    } else {
        theHulk.setAttribute("data-state", 'The Hulk');
    }

}

// I got lost at the end and stopped following along in intelliJ, this is not the complete lecture that can be found
// on neptune web exercises