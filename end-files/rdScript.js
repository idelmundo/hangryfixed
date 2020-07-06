// var foodArray = ["thai", "japanese", "hawaiian", "vietnamese", "brazilian"]

// var random = foodArray[Math.floor(Math.random() * foodArray.length)]
// console.log(random)

// $("button").on("click", function() { //pointing to the button 


//     var food = $(this).attr("data-food");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + //concating it with person and api
//         food + "&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4&limit=2"; //direct to URL


//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })

//     .then(function(response) { // will always have THEN without it this will show up 
//         console.log(response)
//         var results = response.data
//         for (var i = 0; i < results.length; i++) {
//             var gifDiv = $("<div>");
//             var foodImage = $("<img>"); // img tag 
//             foodImage.attr("src", results[i].images.fixed_height.url); //lookiing for image look at api 

//             gifDiv.prepend(foodImage); // push to gifdiv

//             $("#gifs-appear-here").prepend(gifDiv); // push gifdiv
//         }
//     });
// });

$("example-table").tabulator({
    height: 205,
    layout: "fitColumns",
    columns: [
        { title: "name", field: "name", width: 150 },
        { title: "age", field: "age", align: "left", formatter: "progress" },
        { title: "Favorite Color", field: "col" },
        { title: "Date of Birth", field: "dob", sorter: "date", align: "center" },
    ],
    rowClick: function(e, row) {
        alert("Row" + row.getData().id + "clicked!!");
    },
});
var tabledate = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
    { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
    { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
];

$("#example-table").tabulator("setData", tabledate);