//page2.html functionality 

$(document).ready(function () {

 var queryParams = { };
    //page 2 functionality
    
    $("#page2btn").on("click", function() {
        queryParams.category = $("#foodCategory").val().trim();
    })
    console.log(queryParams);

});





