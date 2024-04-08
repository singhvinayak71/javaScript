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
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  resetState()
  let currentQuestion = questions[currentQuestionIndex];
  // console.log(currentQuestion.answers)
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    console.log(answer.text)
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer)
  });
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.correct === "true"
  if(isCorrect){
    selectedBtn.classList.add("correct")
    score++
  }else{
    selectedBtn.classList.add("incorrect")
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct == "true"){
      button.classList.add("correct");
      
    }
    button.disabled = true
  })
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML =  `You Scored ${score} out of ${questions.length}`
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "block"
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion()
  }else{
    showScore()
  }
}

nextButton.addEventListener('click', ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton()
  }else{
    startQuiz()
  }
})

startQuiz();
