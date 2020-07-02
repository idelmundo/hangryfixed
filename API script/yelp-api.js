//updated 6/30/2020
$(document).ready(function () {

    var 

    function fetchData(address) {
        //Maps API
        var APIKey = config.GOOGLE_KEY
        var mapsURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "CA&key=" + APIKey;
        $.ajax({
            url: mapsURL,
            method: "GET"

        }).then(function (response) {
            console.log(response);

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
            var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=" + foodCategory +  "&price=" + price + "&latitude=" + testLatitude + "&longitude=" + testLongitude;

            $.ajax({
                url: myurl,
                headers: {
                    'Authorization': config.YELP_KEY
                },
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    // Itirate through the JSON array of 'businesses' which was returned by the API
                    $.each(data.businesses, function (i, item) {
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
                    });
                }

            });

        });

    };
    $("#saveBtn").on("click", function (event) {
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

});
