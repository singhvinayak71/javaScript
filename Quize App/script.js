const questions = [
  {
    question: "Do you _____ chocolate milk?",
    answers: [
      { text: "like", correct: true },
      { text: "likes", correct: false },
      { text: "liked", correct: false },
    ],
  },

  {
    question: "He _____ not want to go to the movies.",
    answers: [
      { text: "do", correct: false },
      { text: "does", correct: true },
      { text: "is", correct: false },
    ],
  },

  {
    question: "It _____ a beautiful day today.",
    answers: [
      { text: "is", correct: true },
      { text: "are", correct: false },
      { text: "am", correct: false },
    ],
  },

  {
    question: " Sorry, Lisa _____ not here at the moment.",
    answers: [
      { text: "has", correct: false },
      { text: "is", correct: true },
      { text: "are", correct: false },
    ],
  },

  {
    question: "Choose the correct Present ( Affirmative ) sentence .",
    answers: [
      { text: "He plays with his brother", correct: true },
      { text: "He play with his brother", correct: false },
      { text: "He played with his brother", correct: false },
      { text: "He does not play with his brother", correct: false },
    ],
  },

  {
    question: "We use ________ form of verb in Present tense .",
    answers: [
      { text: "1st", correct: true },
      { text: "2nd", correct: false },
      { text: "3rd", correct: false },
      { text: "4th", correct: false },
    ],
  },
  {
    question: "Choose the correct present ( Interrogative ) sentence .",
    answers: [
      { text: "Is he writes the mail", correct: false },
      { text: "Is he write the mail", correct: false },
      { text: "Do he write the mail", correct: false },
      { text: "Does he write the mail", correct: true },
    ],
  },
  {
    question: "In Present Indefinite tense we talk about _________ .",
    answers: [
      { text: "daily routine", correct: true },
      { text: "past actions", correct: false },
      { text: "action we will do", correct: false },
      { text: "action we have done", correct: false },
    ],
  },
  {
    question: "Which set of verbs is in simple present tense?",
    answers: [
      { text: "wased, built, cleaned", correct: false },
      { text: "washes, builds, cleans", correct: true },
      { text: "flew, eaten, ran", correct: false },
      { text: "will wase, will go, shall come", correct: false },
    ],
  },
  {
    question: "Choose the Present ( Negative ) sentence .",
    answers: [
      { text: "I do not eats fruits .", correct: false },
      { text: "i does not eats food", correct: false },
      { text: "I do not eat food", correct: true },
      { text: "He are not eat food", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Display all questions
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  // console.log(currentQuestion.answers)
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // show answers
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    console.log(answer.text);
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Reset State
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Select Answer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  handleNextButton();
  nextButton.style.display = "block";
}

// show score
function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

// next button
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});


startQuiz();
