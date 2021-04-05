(function() {
    "use strict";

    console.log("Hello, Rose. Fancy seeing you here :)");

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            this.area = Math.PI * Math.pow(this.radius, 2)
            // hint: area = pi * radius^2

            return this.area;
        },

        logInfo: function (doRounding) {
            if (doRounding === true) {
                return Math.ceil(this.getArea());
            } else {
                return this.getArea();
            };
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


        }
    };

    console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.logInfo());

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    circle.radius = 5
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(Math.ceil(circle.logInfo(true)));
})();
