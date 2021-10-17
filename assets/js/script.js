// Variables
var quizContainer = document.querySelector("#quiz-container")
var listContainer = document.querySelector(".list-container")
var quizQuestion = document.querySelector("#quiz-question")
var quizLi1 = document.querySelector(".answer1")
var quizLi2 = document.querySelector(".answer2")
var quizLi3 = document.querySelector(".answer3")
var quizLi4 = document.querySelector(".answer4")

var questionNumber = document.querySelector("#question-number")
var startQuizDiv = document.querySelector("#start-quiz")
var startBtnEl = document.querySelector("#start-btn")
var answerCheck = document.querySelector(".answer-check")
//var nextBtn = document.querySelector(".next")

//var counter = 0; 



// Questions
var questionsArray = [
    {
        question: "What symbol defines content of an array?", 
        answers: ['brackets', 'parenteses', 'quotes', 'carrots'],
        correctAnswer: 'brackets'
    },
    {
        question: "What is the correct syntax for a function?", 
        answers: ["fucntion (){}", "function ()", "var=function", "function"],
        correctAnswer: "fucntion (){}"
    },
    {
        question: "Where should should you link your js file in the index.html?",
        answers: ["In the <head>", "in the <header>", "at top of <body>", "at bottom of <body>"],
        correctAnswer: "at bottom of <body>"
    },
    {
        question: "What does this '!=' symbol mean? ",
        answers: ["important", "equals if statement preceeding is true", "does not equal", "equal in all types"],
        correctAnswer: "does not equal"
    }
];

// Timer
var time = 60 
var timerEl = document.querySelector("#time-left")
timerEl.textContent = time

//from Alif, how to get all li in one variable
// var answerButtons = [quizLi1, quizLi2, quizLi3, quizLi4]
// for(var i = 0; i < answerButtons.length; i++) {
//     var btn = answerButtons[i];
//     btn.addEventListener('click', function(event){
//         var currentQuestion = questionsArray[counter];
//         var target = event.target;

//         // compare answer from currentQuestion and target
//         console.log("target", target);

//         // do any other programming stuff needed like updating ui or other

//         counter++;
//     })
// }

// Start quiz
var startQuiz = function() {
quizContainer.classList.remove("hidden")

startQuizDiv.classList.add("hidden")
//startTimer() Timer countdown, clearInterval at 0
var startTimer = setInterval(function() {
    
    if (time > 0) {
        time = time - 1
        timerEl.textContent = time
    } else {
        clearInterval(startTimer);
    }   
}, 1000)
//Show question
displayQA()
theNumber = 1
questionNumber.textContent = theNumber
}

//when start button pressed start quiz
arraySelect = 0
startBtnEl.addEventListener("click", startQuiz)
var displayQA = function() {
    quizQuestion.textContent = questionsArray[arraySelect].question
    quizLi1.textContent = questionsArray[arraySelect].answers[0]
    quizLi2.textContent = questionsArray[arraySelect].answers[1]
    quizLi3.textContent = questionsArray[arraySelect].answers[2]
    quizLi4.textContent = questionsArray[arraySelect].answers[3]
}
displayQA();

// Validate if questions clicked are correct
var validate = function () {
    var validateSelection = questionsArray[arraySelect].correctAnswer
    //click on li and see if matches correct answer
    quizLi1.addEventListener("click", function(){
    
        if (questionsArray[arraySelect].answers[0] == validateSelection){
        answerCheck.textContent = "Correct!"
    } else {
        answerCheck.textContent = "Wrong! 10 seconds deducted."
    }
    
    })
    
    quizLi2.addEventListener("click", function(){
            if (questionsArray[arraySelect].answers[1] == validateSelection){
            answerCheck.textContent = "Correct!"
        } else {
            answerCheck.textContent = "Wrong! 10 seconds deducted."
        }
    })
    
    quizLi3.addEventListener("click", function(){
            if (questionsArray[arraySelect].answers[2] == validateSelection){
            answerCheck.textContent = "Correct!"
        } else {
            answerCheck.textContent = "Wrong! 10 seconds deducted."
        }
    })
    
    quizLi4.addEventListener("click", function(){
            if (questionsArray[arraySelect].answers[3] == validateSelection){
            answerCheck.textContent = "Correct!"
        } else {
            answerCheck.textContent = "Wrong! 10 seconds deducted."
        }
    })

}
validate();

// Move to next question after click
var userChoices = [quizLi1, quizLi2, quizLi3, quizLi4]
for(var i = 0; i < userChoices.length; i++) {
        var btn = userChoices[i];
        btn.addEventListener('click', function(event){
            if (theNumber == 4) {
                btn.addEventListener('click', function(event){
                    window.prompt("Type initals to record your score")
        
                })
    
            } else {

            arraySelect = arraySelect + 1;
            theNumber =  theNumber + 1;
            questionNumber.textContent = theNumber
            displayQA();
            validate();

            }

        })


    }


// btn.addEventListener("click", function() {
//     arraySelect = arraySelect + 1;
//     theNumber =  theNumber + 1;
//     questionNumber.textContent = theNumber
//     answerCheck.textContent = " "
//     displayQA();
//     validate();

// })