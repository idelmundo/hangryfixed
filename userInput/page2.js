//page2.html functionality 

$(document).ready(function () {

 var queryParams = [];
    //page 2 functionality
    
    $("#saveBtn").on("click", function() {
        queryParams = $("#food").val().trim();
        localStorage.setItem("queryParams", JSON.stringify(queryParams));
        window.open(href = "page3.html")
    })
    console.log(queryParams);

});





