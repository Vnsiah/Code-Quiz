let choicesE1 = document.querySelector("#choices")
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var startQuizButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsDisplay = document.querySelector("#questions");

let index = 0
let currentQuestions;


let questions = [
    { question: "what is 20+10", answers: ["20", "30", "5", "35"], correctAnswer: 1 },
    { question: "what is my favourite song", answers: ["rock", "jaz", "gosple", "instrumental"], correctAnswer: 2 },
    { question: "what is 50 -10", answers: ["30", "60", "50", "40"], correctAnswer: 3 },
    { question: "do I like codeing", answers: ["yes", "no", "i dont know", "not sure"], correctAnswer: 0 }
];



function startQuiz() {
    startScreen.classList.add("hide");

    

    questionsDisplay.classList.remove("hide");

    document.querySelector("#question-title").textContent = questions[0].question
    console.log(questions[0].answers[0])
    
    choicesE1.addEventListener("click", function (event) {
    
        if (event.target.matches("button")) {
            console.log(event.target.getAttribute("data-index"))
    
        }
    
    })
    // event.stopPropagation();
    // document.querySelector(".navbar-text").textContent = "Time: " + time;

    // // Replace placeholder with the first question
    // changeQuestion();

    // document.querySelector("#titleScreen").style = "display: none;";
    // document.querySelector("#questionBlock").style = "display: block;";

    // timeLimit = setInterval(function () {
    //     time--;
    //     document.querySelector(".navbar-text").textContent = "Time: " + time;
    //     if (time <= 0) {
    //         clearInterval(timeLimit);
    //         showEndGame();
    //     }
    // }, 1000);
}

startQuizButton.addEventListener("click", startQuiz);


