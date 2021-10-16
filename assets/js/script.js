//Questions
var quizContainer = document.querySelector("#quiz-container")
var startQuizDiv = document.querySelector("#start-quiz")
var startBtnEl = document.querySelector("#start-btn")
var q1 = "Arrays in JS can be used to store what?"
var choicesQ1 = ['brackets', 'parenteses', 'quotes']
var answerQ1 = 'brackets'

var q2 = "What is the correct syntax for a function?"
var choicesQ2 = ["fucntion (){}", "function ()", "var=function", "function"]
var answerQ2 = "function (){}"
var questionNum = 1
var time = 6 
var timerEl = document.querySelector("#time-left")

//questionNum = questionNum + 1 

//Timer countdown, clearInterval at 0



var startQuiz = function() {
quizContainer.classList.remove("hidden")
startQuizDiv.classList.add("hidden")
var startTimer = setInterval(function() {
    if (time > 0) {
        time = time - 1
        timerEl.textContent = time
    } else {
        clearInterval(startTimer);
    }   
}, 1000)
//startTimer()
displayQA()
}
startBtnEl.addEventListener("click", startQuiz)

var displayQA = function() {
    
}




//Answers