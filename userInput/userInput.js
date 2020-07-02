$(document).ready(function () {

 var answersArr = [];
 var queryParams = { };
    //page 2 functionality
    
    $("#page2btn").on("click", function() {
        queryParams.category = $("#foodCategory").val().trim();
    })
    console.log(queryParams);

    //page 3 functionality (should we call at the end of page 2 above?)

    console.log(queryParams);

    

    function page3() {
        var questionsArr = [
            {q: "How far are you willing to travel (in miles)?", 
                choice1: "1 mile",
                choice2: "5 miles",
                choice3: "10 miles",
                choice4: "15 miles"},
            {q: "How much to do you want to spend?", 
                choice1: "$",
                choice2: "$$",
                choice3: "$$$",
                choice4: "$$$$"},
            {q: "Select your prefered option: ", 
                choice1: "Delivery",
                choice2: "Takout",
                choice3: "Both"},
        ] 
        console.log(questionsArr[0]);
        console.log("this question is: " + questionsArr[i].q);
        $("#1").text($("<div>" + questionsArr[0].choice1 + "<div>"));
        for (i = 0; i < questionsArr.length; i++);
        $("#question").append($("<div>" + questionsArr[i].q + "<div>"));
        // console.log(questionsArr[0].choice2)
        // function choices() {
        //     if (this.textContent === questionsArr[i].choice1.split("e"));
          
            // $("#page2btn").on("click", function() {
            //     queryParams.category = $("#foodCategory").val().trim();
            
        // }
    
        // for (i = 0; i < questionsArr.length; i++)


        // $("#question").append(questionsArr[i]);
        // console.log(JSON.stringify(questionsArr[i]));
        //     for (j = 0; j <questionsArr[i].c.length; j++);
        // $(".button").html(questionsArr[i].c[j]);
        // console.log(questionsArr[i]); 
        // $(".button").on("click", function() {
        //     queryParams.category = $("#foodCategory").val().trim();
        // }
    }
 page3();



});





