"use strict";

//variable times itself no greater than 65536
var i = 1;

while (i < 65536) {
    i = i * 2;
    console.log(i);
}

///////////////////////////////////////////////
var allCones = 25;// Math.floor(Math.random() * 50) +50;

do {
    var cones =Math.floor(Math.random() * 5) + 1;
  if ( cones > allCones) {
      console.log(cones + "cones sold..");
      continue;
  }
}
while (allCones > 0);
    console.log("hooray i sold them all!");


//////////////////////////////////////////////





