var questionsArr = [
    {q: "How far are you willing to travel (in miles)?", 
        choice1: "1",
        choice2: "5",
        choice3: "10",
        choice4: "15"},
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

var currentQuestion = 0;
var userChoices = [];
displayQuestion();

$(".button").on("click", function(){
    var userData = $(this).text();
    console.log(userData);
    if (currentQuestion < 2) {
        userChoices.push(userData);
        currentQuestion ++;
        displayQuestion();
    }else {
        userChoices.push(userData);
        localStorage.setItem("userChoices", JSON.stringify(userChoices));
        window.open(href = "page6.html");
    }
})

function displayQuestion () {
    $("#question").text(questionsArr[currentQuestion].q);
    $("#choice1").text(questionsArr[currentQuestion].choice1);
    $("#choice2").text(questionsArr[currentQuestion].choice2);
    $("#choice3").text(questionsArr[currentQuestion].choice3);
    if (currentQuestion <2) {
    $("#choice4").text(questionsArr[currentQuestion].choice4);
    }else{
        $("#choice4").hide();
    } 
    
}


