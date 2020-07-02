$(document).ready(function() {
    var queryParams = {}
    $("#page2btn").on("click", function() {
        queryParams.category = $("#foodCategory").val().trim();
    })
    console.log(queryParams);


    //YELP API research:
    //call the API and search through the specific user's input '...search?{parameter1}&{parameter2}&etc...
    //distance: need to convert the user's geographical location into longitude and latitude in order to determine the search radius
    //search radius is a int < 40000 meters or 25 miles so need to convert the miles to meters 
    //price range: price parameter accepts string; i.e. ( "1, 2") will search for businesses with the price range $ and $$
    //food choice
    //limit :20 results 
    var radiusMeters = radius * 1609;
    var testLongitude = -122.475420
    var testLatitude = 37.717900
        // var foodCategory = "pho"
        //when !category is entered, an error is logged onto console with the value "ERR_NAME_NOT_RESOLVED"
    var price = "$$"
    var radius = 8046.72
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=" + foodCategory + "&price" + price + "&latitude=" + testLatitude + "&longitude=" + testLongitude;

    //when !category is entered, an error is logged onto console with the value "ERR_NAME_NOT_RESOLVED"
    var price = "$$"
    var radius = 8046.72
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=" + foodCategory + "&price" + price + "&latitude=" + testLatitude + "&longitude=" + testLongitude;

    var longitude = response.results[0].geometry.location.lng;
    console.log(longitude)
    var latitude = response.results[0].geometry.location.lat;
    console.log(latitude)


    // var radius = radiusMiles * 1609;
    var testLongitude = longitude
    var testLatitude = latitude
    var foodCategory = "gelato"
        //when !category is entered, an error is logged onto console with the value "ERR_NAME_NOT_RESOLVED"
    var price = "2"
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=" + foodCategory + "&price=" + price + "&latitude=" + testLatitude + "&longitude=" + testLongitude;

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': config.YELP_KEY
        },
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
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
                    //    console.log(delivery)
                    // Append our result into our page
                $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b><br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews <br>' + 'This business offers: ' + delivery + '</div>');
            });
        }

    });

});


$("#saveBtn").on("click", function(event) {
    event.preventDefault();

    function buildUserAdrress() {
        var userAddressInput = $("#address-input").val().toLowerCase().split(",");
        console.log(userAddressInput);
        var streetAddress = (userAddressInput[0].toLowerCase().split(" "))
        return encodeURI(streetAddress);
    };
    fetchData(buildUserAdrress())
        // window.location.assign("../userInput/page2.html");

});