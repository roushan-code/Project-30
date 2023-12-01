const questions = [
    {
        question: "Which is largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer: [
            { text: "Vatican City", correct: false },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: true },
            { text: "Shri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "5.Which is largest internal organ in the human body",
        answer: [
            { text: "Lungs", correct: false },
            { text: "Heart", correct: false },
            { text: "Kidney", correct: false },
            { text: "Liver", correct: true},
        ]
    }
];

let head = document.createElement("h4");
head.classList.add("question");
const questionElement = document.querySelector(".question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.querySelector(".btn-box");
const nButton = document.querySelector(".next-btn");
const displayBtn = document.querySelector(".display-btn");
const displayQ = document.querySelector(".display-q");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    // nextButton.innerHTML = "Next";

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    // questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    head.innerText = questionNo + ". " + currentQuestion.question;
    displayQ.append(head);

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option");
        answerButtons.appendChild(button);
        displayQ.append(answerButtons);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        displayQ.append(nextButton);
        button.addEventListener("click", selectAnswer);
    });
    
    
}

function resetState() {
    
    nextButton.style.display = "none";
    displayBtn.style.display = "none";
    
    
    // console.log(answerButtons.firstElementChild); // firstElementChild means phla element
    // console.log(answerButtons.firstChild); // firstChild will consider first space as 'text'. then if you again run, then it will select the first element and then again space as 'text' 

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e) {
    
    const selectionBtn = e.target;
    // console.log(selectionBtn);
    const isCorrect = (selectionBtn.dataset.correct === "true");

    if (isCorrect) {
        selectionBtn.classList.add("correct");
        score++;

    } else {
        selectionBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // console.log(answerButtons.children);
    nextButton.style.display = "flex";
    
    nButton.innerText = "Next";
    
    // console.log(nextButton.style.display);
}



function showScore() {
    resetState();
    head.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nButton.innerText = "Play Again";
    nextButton.style.display = "flex";
    displayBtn.style.display = "flex";
    displayBtn.addEventListener("click", showAllAns)
}
function showAllAns(){
    displayQ.removeChild(displayQ.firstElementChild)
    currentQuestionIndex = 0;
    for (let i = 0; i < questions.length; i++) {
        showAns();
    }
    displayBtn.style.display = "none";
    
}




function showAns() {
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    let virtualHead = document.createElement("h4");
    virtualHead.classList.add("question");

    virtualHead.innerText = questionNo + ". " + currentQuestion.question;
    
    let ansBtn = document.createElement("div");

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option");
        ansBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // console.log(button.dataset.correct);
        if (button.dataset.correct) {
            button.classList.add("correct");
        } 
        button.disabled = true;
        // button.addEventListener("click", selectAnswer);
    });
    displayQ.append(virtualHead);
    displayQ.append(ansBtn);
    displayQ.append(nextButton);
    
    currentQuestionIndex++;
    
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
        
    }
}

nButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
            cleanDisplayQ()
            startQuiz();
        
    }
})

function cleanDisplayQ(){
    while (displayQ.firstElementChild) {
        displayQ.removeChild(displayQ.firstElementChild);
        
    }
}


startQuiz();