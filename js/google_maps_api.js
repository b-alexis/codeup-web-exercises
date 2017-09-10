////setting up map////

(function() {
    "use strict";

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 19,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        },
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
})();

var marker = new google.maps.Marker({
    position: codeup,
    map: map
});

var geocoder = new google.maps.Geocoder();

 // geocode(request:GeocoderRequest, callback:function(Array.<GeocoderResult>, GeocoderStatus))

var address = "300 Alamo Plaza, San Antonio, TX, 78205";

// Init geocoder object
var geocoder = new google.maps.Geocoder();

// Geocode our address
geocoder.geocode({ "address": address }, function(results, status) {

    // Check for a successful result
    if (status === google.maps.GeocoderStatus.OK) {

        // Recenter the map over the address
        map.setCenter(results[0].geometry.location);
    } else {

        // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + status);
    }
});

var codeup = { lat: 29.426791, lng: -98.489602 };



var infowindow = new google.maps.InfoWindow({
    content: "Changing the world, one programmer at a time."
});

// Open the window using our map and marker
infowindow.open(map, marker);


















//     // Render the map
//     var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//     map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
//
//
//
// // Init geocoder object
// var geocoder = new google.maps.Geocoder();
//
//     // Set our address to geocode
//     var address = "1810 NW Military Hwy, San Antonio, TX 78213";
//
//
// // Geocode our address
// geocoder.geocode({ "address": address }, function(results, status) {
//
//     // Check for a successful result
//     if (status === google.maps.GeocoderStatus.OK) {
//
//         // Recenter the map over the address
//         map.setCenter(results[0].geometry.location);
//     } else {
//
//         // Show an error message with the status if our request fails
//         alert("Geocoding was not successful - STATUS: " + status);
//     }
// });
