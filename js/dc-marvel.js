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
