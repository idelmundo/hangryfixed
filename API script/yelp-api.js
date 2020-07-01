//updated 6/30/2020
$(document).ready(function() {

    //Maps API
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
    });

    var radiusMeters = radius * 1609;
    var testLongitude = -122.475420
    var testLatitude = 37.717900
    var foodCategory = "pho"
    //when !category is entered, an error is logged onto console with the value "ERR_NAME_NOT_RESOLVED"
    var price = "$$"
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=" + foodCategory + "&price" + price + "&latitude=" +testLatitude + "&longitude=" + testLongitude;

    $.ajax({
   url: myurl,
   headers: {
    'Authorization':'Bearer c5M_cqjgsc9TQIIwKOonOb2cSnHENWcFooDQzXUjDUG-ZzmFdMWJZZ4vSggDPtMRZkffTnQrcuVj8ljjhOh8gk86rQXf-gWkQMx5_GOoL27Uf8_O6MU1MER2Qj36XnYx',
    },
   method: 'GET',
   dataType: 'json',
   success: function(data){
       console.log(data);
       // Grab the results from the API JSON return
       var totalresults = data.total;
       // If our results are greater than 0, continue
       if (totalresults > 0){
           // Display a header on the page with the number of results
           $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
           // Itirate through the JSON array of 'businesses' which was returned by the API
           $.each(data.businesses, function(i, item) {
               // Store each business's object in a variable
               var id = item.id;
            //    var alias = item.alias;
               var phone = item.display_phone;
               var image = item.image_url;
               var name = item.name;
               var rating = item.rating;
               var reviewcount = item.review_count;
               var address = item.location.address1;
               var city = item.location.city;
               var state = item.location.state;
               var zipcode = item.location.zip_code;
               var delivery = JSON.stringify(item.transactions[0])
               console.log(delivery)
               // Append our result into our page
               $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b><br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews <br>' + 'This business offers: ' + delivery + '</div>' );
         });
       } else {
           // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
           $('#results').append('<h5>We discovered no results!</h5>');
       }
   }
});    
});