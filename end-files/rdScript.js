// var foodArray = ["thai", "japanese", "hawaiian", "vietnamese", "brazilian"]

// var random = foodArray[Math.floor(Math.random() * foodArray.length)]
// console.log(random)

$("button").on("click", function() { //pointing to the button 


    var food = $(this).attr("data-food");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + //concating it with person and api
        food + "&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4&limit=2"; //direct to URL


    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) { // will always have THEN without it this will show up 
        console.log(response)
        var results = response.data
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var foodImage = $("<img>"); // img tag 
            foodImage.attr("src", results[i].images.fixed_height.url); //lookiing for image look at api 

            gifDiv.prepend(foodImage); // push to gifdiv

            $("#gifs-appear-here").prepend(gifDiv); // push gifdiv
        }
    });
});