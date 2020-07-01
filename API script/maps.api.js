$(document).ready(function(){
    var APIKey = "AIzaSyDViS6l2yCo2AMDS72miisvodhlZn7z9a4"
    // var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address={number}+{Street}+{Address},{City}+{Name},+CA&key=" + APIKey;

    var mapsURL = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false&key=" + APIKey;
    $.ajax({
        url: mapsURL,
        method: "GET"

    }).then (function(response){
        console.log(response);

        var longitude = response.results[0].geometry.location.lng;
        console.log(longitude)
        var latitude = response.results[0].geometry.location.lat;
        console.log(latitude)
    })
})