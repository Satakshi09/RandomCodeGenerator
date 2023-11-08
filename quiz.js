const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Madrid", "Paris"],
        correct: 3,
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: 1,
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correct: 2,
    },
    {
        question: "How many continents are there on Earth?",
        choices: ["5", "6", "7", "8"],
        correct: 1,
    },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        const choice = document.createElement("li");
        choice.className = "choice";
        choice.textContent = questions[currentQuestion].choices[i];
        choice.addEventListener("click", checkAnswer);
        choice.dataset.answer = i;
        choicesElement.appendChild(choice);
    }
}

function checkAnswer(event) {
    const selectedChoice = event.target;
    if (selectedChoice.dataset.answer == questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizElement = document.getElementById("quiz");
    const scoreElement = document.getElementById("score");
    const choicesElement = document.getElementById("choices");

    quizElement.innerHTML = "Quiz completed!";
    scoreElement.textContent = `Score: ${score}`;
    choicesElement.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();
});
