(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth' , 'Mars' , 'Jupiter' , 'Saturn' , 'Uranus' , 'Neptune'];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }


    planets.unshift ('Sun');

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Sun' , 'Mercury' , 'Venus' , 'Earth' , 'Mars' , 'Jupiter' , 'Saturn' , 'Uranus' , 'Neptune');



    planets.push ('Pluto');

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Sun' , 'Mercury' , 'Venus' , 'Earth' , 'Mars' , 'Jupiter' , 'Saturn' , 'Uranus' , 'Neptune' , 'Pluto');


    planets.shift ('Sun');

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Mercury' , 'Venus' , 'Earth' , 'Mars' , 'Jupiter' , 'Saturn' , 'Uranus' , 'Neptune' , 'Pluto');


    planets.pop ('Pluto');

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Mercury' , 'Venus' , 'Earth' , 'Mars' , 'Jupiter' , 'Saturn' , 'Uranus' , 'Neptune');


    planets.indexOf ('Earth');

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.



planets.splice(3 , 1);
    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Mercury' , 'Venus' , 'Earth' , 'Jupiter' , 'Saturn' , 'Uranus' , 'Neptune');


    planets.splice (3, 0 , 'Mars');

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Mercury' , 'Venus' , 'Earth' , 'Mars' , 'Jupiter' , 'Saturn' ,'Uranus' , 'Neptune');


    planets.reverse ();

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Neptune' , 'Uranus' , 'Saturn' , 'Jupiter' , 'Mars' , 'Earth' , 'Venus' , 'Mercury');

    planets.sort ();
    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets('Earth' , 'Jupiter' , 'Mercury' , 'Neptune' , 'Saturn' , 'Uranus' , 'Venus');
})();
