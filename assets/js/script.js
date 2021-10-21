// Variables
var listContainer = document.querySelector(".list-container")
var quizContainer = document.querySelector("#quiz-container")
var quizQuestion = document.querySelector("#quiz-question")
var inputName = document.querySelector(".inputName")
var inputBtn = document.querySelector(".inputBtn")

var quizLi1 = document.querySelector(".answer1")
var quizLi2 = document.querySelector(".answer2")
var quizLi3 = document.querySelector(".answer3")
var quizLi4 = document.querySelector(".answer4")

var questionNumber = document.querySelector("#question-number")
var startQuizDiv = document.querySelector("#start-quiz")
var startBtnEl = document.querySelector("#start-btn")
var answerCheck = document.querySelector(".answer-check")
var scoreDiv = document.querySelector("#score-board")

// Questions
var questionsArray = [
    {
        question: "What symbol defines content of an array?",
        answers: ['brackets', 'parenteses', 'quotes', 'carrots'],
        correctAnswer: "brackets"
    },
    {
        question: "What is the correct syntax for a function?",
        answers: ["function (){}", "function ()", "var=function", "function"],
        correctAnswer: "function (){}"
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

// Hide Score board page and function to show it later
scoreDiv.classList.add("hidden")
var scoreBoard = function () {
    scoreDiv.classList.remove("hidden")
}

// Start quiz by adding class hidden to first page and removing hidden to quiz container
var startQuiz = function () {
    quizContainer.classList.remove("hidden")

    startQuizDiv.classList.add("hidden")

    //startTimer() Timer countdown, clearInterval at 0
    var startTimer = setInterval(function () {

        if (time >= 1) {
            time = time - 1
            timerEl.textContent = time

        } else {
            endGame()
        }
    }, 1000)

    //Show question number at top
    displayQA()
    theNumber = 1
    questionNumber.textContent = theNumber
}

//when start button pressed start quiz
arraySelect = 0
//answersIndex = 0
startBtnEl.addEventListener("click", startQuiz)
var displayQA = function () {
    quizQuestion.textContent = questionsArray[arraySelect].question
    quizLi1.textContent = questionsArray[arraySelect].answers[0]
    quizLi2.textContent = questionsArray[arraySelect].answers[1]
    quizLi3.textContent = questionsArray[arraySelect].answers[2]
    quizLi4.textContent = questionsArray[arraySelect].answers[3]
}
displayQA();


// Validate if questions clicked are correct
var validate = function () {
    var userChoices = [quizLi1, quizLi2, quizLi3, quizLi4]
    console.log("validate?")
    for (var i = 0; i < userChoices.length; i++) {
        var btn = userChoices[i];

        //click on li and see if matches correct answer

        userChoices[i].addEventListener("click", function (event) {
            var validateSelection = questionsArray[arraySelect].correctAnswer
            console.log('validateSeclection is ' + validateSelection)
            console.log('event.target is ' + event.target.textContent)
            if (event.target.textContent == validateSelection) {
                answerCheck.textContent = "Correct!"

            } else {
                answerCheck.textContent = "Wrong! 10 seconds deducted."
                time = time - 10
                timerEl.textContent = time
            }
            quizLoop()
        })
    }
}
validate()

// End Game function
var endGame = function () {
    scoreBoard();
    quizContainer.classList.add("hidden");
    clearInterval(startQuiz);
    time = 0

}

// Move to next question after click
var quizLoop = function () {

    var userChoices = [quizLi1, quizLi2, quizLi3, quizLi4]

    if (theNumber === questionsArray.length) {

        endGame();

    } else {
        arraySelect = arraySelect + 1;

        theNumber = theNumber + 1;
        questionNumber.textContent = theNumber
        displayQA();


    }
}

var yourScoreDiv = document.querySelector(".your-score")
var score = document.querySelector(".score")

//append tr to table
// append td to tr
//event listener for btn for input and add to local storage key values string 
inputBtn.addEventListener('click', function(){
    var initals = inputName.value
    
    //var scoreP = document.createElement('p')
    
    //yourScoreDiv.textContent = initals + ": " + time
    //scoreP.appendChild(yourScoreDiv);

    score.innerHTML = timerEl.textContent

    var spanResult = document.getElementById('result') 
    
    spanResult.innerHTML = initals + "  |  " + timerEl.textContent
          })
//event listener for highscore and add to local storage