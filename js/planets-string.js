(function(){
    "use strict";
console.log("Hello, Neptune!");
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var stringWithBreakTags = planetsArray.join('<br>');
    console.log(stringWithBreakTags)

    //This could be useful when we begin to use CSS and HTML more.
    // var unoderedList = planetsString
    console.log(stringWithBreakTags);
    console.log(planetsArray);


    var planetsList = "<ul>";

    planetsArray.forEach(function(planet){
        planetsList += "<li>" + planet + "</li>";
        });

/*shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});*/
        planetsList += "</ul>";

    console.log(planetsList);
    })();
