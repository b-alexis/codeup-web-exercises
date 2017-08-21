"use strict";

var userNum = prompt("pick a number between 1 and 10")


 for (var i = 1; i <= 10; i++ ) {
     console.log(userNum + " X " + i + " = " + userNum * i );
 }
//////////////////////////////////////////////////////////////



for ( var i = 1 ; i <= 10 ; i++) {
    var numbers = Math.floor(Math.random() * 20) + 180;
    if (numbers % 2 === 0)
        console.log(numbers + "is even");
    else {
        console.log(numbers + "is odd")
    }

}