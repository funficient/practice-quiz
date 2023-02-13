const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

console.log(question);
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "How many people in your organization?",
        choice1: "Less than 8.",
        choice2: "8 - 40.",
        choice3: "41 - 250.",
        choice4: "Larger than 250.",
        answer: 1
    },
    {
        question: "How would you describe your organizational structure?",
        choice1: "Startup like with no hierarchy.",
        choice2: "Traditional pyramid hierarchy.",
        choice3: "Matrix like structure.",
        choice4: "Fluid structure.",
        answer: 4
    },
    {
        question: "How many hours, on average, do you spend in meetings?",
        choice1: "Maximum 2 - 3 hours per week.",
        choice2: "About 1 - 2 hours daily.",
        choice3: "About 3 - 4 hours daily.",
        choice4: "More than 4 hours daily",
        answer: 1
    },
    {
        question: "How would you describe your decision making power within your team?",
        choice1: "I have little to no say and have to clear most things with my team lead.",
        choice2: "I can make some decisions but have to keep my boss in the loop.",
        choice3: "I have full autonomy, as long as I get buy-in and agreement from the rest of the team.",
        choice4: "I make all the decisions.",
        answer: 3
    },
    {
        question: "How do you handle conflict in most cases?",
        choice1: "Avoid it like the plague.",
        choice2: "Wait until retrospective / performance review to raise it.",
        choice3: "We allow conflict, and the biggest bully wins.",
        choice4: "We have a well defined conflict resolution process.",
        answer: 4
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS ) {
        return window.location.assign('/end.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach( choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });

        availableQuestions.splice(questionIndex, 1);

        acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();