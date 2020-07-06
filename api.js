$(document).ready(function () {

    //this onclick event does the following: 
    //build user'address into a var for the googleAPI and will return a coordinate
    //store the user's geolocation into local storage
    //move to the next page; food-category
    $("#feelingHangryBtn").on("click", function (event) {
        event.preventDefault();
        function buildUserAdrress() {
            var userAddressInput = $("#address-input").val().toLowerCase().split(",");
            if (userAddressInput === ""){
                
            }
            console.log(userAddressInput);
            var streetAddress = (userAddressInput[0].toLowerCase().split(" "));
            return encodeURI(streetAddress);

        };

        fetchLocation(buildUserAdrress())


        window.open(href = "food-category.html");
        window.close();

    });
    //userChoicesCategory stores the food category
    var foodCategory = [];

    //userChoices store the options
    var userChoices = [];

    //this on-click event will update and store the user's food category in local storage under the object userChoices
    //the click will also direct to next pg user-input.html
    $("#foodCategoryBtn").on("click", function () {
        // foodCategory = $("#food").val().trim();

        localStorage.setItem("foodCategory", JSON.stringify($("#food").val().trim()));
        // var test = localStorage.getItem("foodCategory");

        window.open(href = "user-input.html")
        window.close();
    });

    var questionsArr = [
        {
            q: "How far are you willing to travel ?",
            choice1: "1 mile",
            choice2: "5 miles",
            choice3: "10 miles",
            choice4: "15 miles"
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
            choice2: "Takeout",
            choice3: "Both"
        },
    ]

    var currentQuestion = 0;
    displayQuestion();

    //ask and store the options in local storage userChoices
    $(".button").on("click", function () {
        var userData = $(this).text();
        console.log(userData);

        if (currentQuestion < 2) {
            userChoices.push(userData);
            currentQuestion++;
            displayQuestion();
        } else {
            userChoices.push(userData);
            localStorage.setItem("userChoices", JSON.stringify(userChoices));
            window.open(href = "userInput/selection.html")
            getBusinessInfo()
            
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


    //the ajax call to maps to retrive geolocation
    var geolocation = {};
    function fetchLocation(address) {
        //Maps API
        var APIKey = "AIzaSyD7kU7_vg6aswMOMvwHXDLYbPSgNs9Am6k"
        var mapsURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "CA&key=" + APIKey;
        $.ajax({
            url: mapsURL,
            method: "GET"

        }).then(function (response) {
            console.log(response);

            var longitude = response.results[0].geometry.location.lng;
            // console.log(longitude)
            geolocation.longitude = longitude;
            var latitude = response.results[0].geometry.location.lat;
            // console.log(latitude)
            geolocation.latitude = latitude;
            // console.log(geolocation);

            localStorage.setItem("user-geolocation", JSON.stringify(geolocation));
        });
    };

     //stored business information into local storage call business-information
    function getBusinessInfo() {
        // var radius = radiusMiles * 1609;
        var userGeolocation = JSON.parse(localStorage.getItem("user-geolocation"));
        // console.log(userGeolocation);
        var longitude = userGeolocation.longitude;
        // console.log(longitude);
        var latitude = userGeolocation.latitude;
        // console.log(latitude)
        var foodCategory = localStorage.getItem("foodCategory");
        // console.log(foodCategory)
        //when !category is entered, an error is logged onto console with the value "ERR_NAME_NOT_RESOLVED"
        var userInputSaved = JSON.parse(localStorage.getItem("userChoices"))
        // console.log(userInputSaved)
        var radius = parseInt(userInputSaved[0]) * 1609;
        // console.log(radius)
        var price = 0;
        //this function convert the $ symbol into an integer
        function convertPrice() {
            var pricein$ = userInputSaved[1];
            if (pricein$ === "$") {
                price = 1;
            } else if (pricein$ === "$$") {
                price = 2;
            } else if (pricein$ === "$$$") {
                price = 3;
            } else {
                price = 4;
            }
        };
        convertPrice()
        // console.log(price);

        var deliveryOptions = userInputSaved[2];
        console.log(deliveryOptions)

        var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + latitude + "&longitude=" + longitude + "&categories=" + foodCategory + "&price=" + price + "&radius=" + radius;

        $.ajax({
            url: myurl,
            headers: {
                'Authorization': "Bearer i3zg_J2QoBX-SpqhxDDk_NlPGNdQ2MzHIu5do6OHocj6Khxl2SznkVmQ-RBdiHH2O3L5WZsS0qnRWcRSEwa5Ler_vTPSDW-wLTINjWhTyoj7hfIj0BhLQ0ySyz79XnYx"
            },
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                localStorage.setItem("business-information", JSON.stringify(data.businesses));

                //     var businessData = data.businesses
                //     console.log(businessData)
                //     localStorage.setItem("businesses-information", businessData)

                //     // Itirate through the JSON array of 'businesses' which was returned by the API
                //     $.each(data.businesses, function (i, item) {
                //         // Store each business's object in a variable
                //         var id = item.id;
                //         //    var alias = item.alias;
                //         var phone = item.display_phone;
                //         var image = item.image_url;
                //         var name = item.name;
                //         var rating = item.rating;
                //         var reviewcount = item.review_count;
                //         var address = item.location.address1;
                //         var city = item.location.city;
                //         var state = item.location.state;
                //         var zipcode = item.location.zip_code;
                //         var delivery = JSON.stringify(item.transactions[0])
                //         //    console.log(delivery)
                //     });
            }

        });

    }

});

