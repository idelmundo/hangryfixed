var businessInfoArray = JSON.parse(localStorage.getItem("business-information"))
console.log(businessInfoArray);
// console.log(businessInfoArray[0].image_url)
var random = businessInfoArray[Math.floor(Math.random() * 11)]
console.log(random)

for (var i = 0; i < 10; i++) {
    businessName = businessInfoArray[i].name;
    businessPhone = businessInfoArray[i].display_phone;
    businessAddress = businessInfoArray[i].location.display_address;
    businessImg = businessInfoArray[i].image_url;
    businessRating = businessInfoArray[i].rating;
    businessMap = businessInfoArray[i].coordinates.latitude;
    businessMap2 = businessInfoArray[i].coordinates.longitude;
}
$(".name").append(businessName);
$(".image").append($("<img>").attr("src", businessImg))
$(".location").append(businessAddress);
$(".phone").append(businessPhone);
$(".rating").append(businessRating);
$(".lMap").append(businessMap);
$(".lMap2").append(businessMap2);


L.mapquest.key = 'vuIBY9eRy3TwF0eJSyhT4gJWCEQSAB5m';
L.mapquest.map('map', {
    center: [businessMap, businessMap2],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
});
// add a marker if possible.

$("#map").append(L.mapquest);

$(".lMap").hide();
$(".lMap2").hide();

// console.log(L.marker)
});

$("#option").on("click", function() { //pointing to the button 
            var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4&tag=mutombo"; //direct to URL
            console.log(queryURL)
            $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                .then(function(response) {
                        var imageUrl = response.data.image_original_url;
                        var mutomboImage = $("<img>");
                        mutomboImage.attr("src", imageUrl);
                        mutomboImage.attr("alt", "mutombo image");
                        $("#name").text("name")
                        $("#location").text("location")
                        $("#phone").text("Phone")
                        $("#images").prepend(mutomboImage);
                        // $("#myTable").append(businessName);
                        // $("#myTable").append(businessAddress);
                        // $("#myTable").append(businessPhone);
                        var businessInfoArray = JSON.parse(localStorage.getItem("business-information"))

                        