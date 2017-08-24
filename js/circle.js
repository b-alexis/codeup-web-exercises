(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (circle){
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI (Math.sq * radius);
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                console.log("Radius rounds to " + Math.ceil(circle.getArea.logInfo));
            }
            else
                console.log ("Radius is " + (circle.getArea.logInfo));


            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };

    // log info about the circle
     console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
