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
    $(document).ready(function() {

        var questionsArr = [{
                q: "How far are you willing to travel (in miles)?",
                choice1: "1",
                choice2: "5",
                choice3: "10",
                choice4: "15"
            },
            {
                q: "How much to do you want to spend?",
                choice1: "$",
                choice2: "$$",
                choice3: "$$$",
                choice4: "$$$$"
            },
            {
                q: "Select your prefered option: ",
                choice1: "Delivery",
                choice2: "Takout",
                choice3: "Both"
            },
        ]

        var currentQuestion = 0;
        var userChoices = [];
        displayQuestion();

        $(".button").on("click", function() {
            var userData = $(this).text();
            console.log(userData);
            if (currentQuestion < 2) {
                userChoices.push(userData);
                currentQuestion++;
                displayQuestion();
            } else {
                userChoices.push(userData);
                localStorage.setItem("userChoices", JSON.stringify(userChoices));
                window.open(href = "user-input.html")
            }
        });

        function displayQuestion() {
            $("#question").text(questionsArr[currentQuestion].q);
            $("#choice1").text(questionsArr[currentQuestion].choice1);
            $("#choice2").text(questionsArr[currentQuestion].choice2);
            $("#choice3").text(questionsArr[currentQuestion].choice3);
            if (currentQuestion < 2) {
                $("#choice4").text(questionsArr[currentQuestion].choice4);
            } else {
                $("#choice4").hide();
            }
        };

        //local storage: businesses-information
        function fetchData(address) {
            //Maps API
            var APIKey = "AIzaSyD7kU7_vg6aswMOMvwHXDLYbPSgNs9Am6k"
            var mapsURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "CA&key=" + APIKey;
            $.ajax({
                url: mapsURL,
                method: "GET"

            }).then(function(response) {
                console.log(response);

                var longitude = response.results[0].geometry.location.lng;
                console.log(longitude)
                var latitude = response.results[0].geometry.location.lat;
                console.log(latitude)

                // var radius = radiusMiles * 1609;
                var testLongitude = longitude
                var testLatitude = latitude
                var foodCategory = ""
                    //when !category is entered, an error is logged onto console with the value "ERR_NAME_NOT_RESOLVED"
                var price = "2"
                var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=" + foodCategory + "&price=" + price + "&latitude=" + testLatitude + "&longitude=" + testLongitude;

                $.ajax({
                    url: myurl,
                    headers: {
                        'Authorization': "Bearer i3zg_J2QoBX-SpqhxDDk_NlPGNdQ2MzHIu5do6OHocj6Khxl2SznkVmQ-RBdiHH2O3L5WZsS0qnRWcRSEwa5Ler_vTPSDW-wLTINjWhTyoj7hfIj0BhLQ0ySyz79XnYx"
                    },
                    method: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        console.log(data);

                        var businessData = data.businesses
                        console.log(businessData)
                        localStorage.setItem("businesses-information", businessData)

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
                        });
                    }

                });

            });

        };
        // Isaias

        // Retrieve the object from storage
        localStorage.getItem("businesses-information");
        var nameOfplace = localStorage.getItem("item.name")
        var addressOfplace = localStorage.getItem("item.location.address1");
        var imageOfplace = localStorage.getItem("item.image_url");

        // Isaias

        //on click will call the apis and also move to the next page
        $("#saveBtn").on("click", function(event) {
            event.preventDefault();

            function buildUserAdrress() {
                var userAddressInput = $("#address-input").val().toLowerCase().split(",");
                console.log(userAddressInput);
                var streetAddress = (userAddressInput[0].toLowerCase().split(" "))
                return encodeURI(streetAddress);
            };
            fetchData(buildUserAdrress())

            window.open(href = "../userInput/food-category.html")

        });

    });
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
    console.log(longitude) var latitude = response.results[0].geometry.location.lat;
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