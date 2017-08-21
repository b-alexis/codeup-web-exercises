"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];

switch (color) {
    case "red":
        console.log(" red, apples are red");
        break;
    case "orange":
        console.log(" orange, Oranges are orange");
        break;
    case "yellow":
        console.log("yellow, bananas are yellow");
        break;
    case "green":
        console.log(" green, limes are green");
        break;
    case "blue":
        console.log("blue, blueberries are blue");
        break;
    default:
        console.log(" Indigo or violet, I do not know anything by that color");

    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

//Inout
var flipACoin = Math.floor(Math.random()* 2);

//process
var message;
if(flipACoin === 0) {
    message = "Buy a car";
}

else{
    message = "buy a house";
}

var message2;
message2 = flipACoin === 0? "buy a car": "buy a house";