// Simple JavaScript Console Quiz Game

// Array of questions and answers
const quiz = [
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "Which keyword declares a constant in JavaScript?", answer: "const" },
  { question: "What symbol is used for comments in JavaScript single line?", answer: "//" },
  { question: "What does CSS stand for?", answer: "cascading style sheets" }
];

// Function to start quiz
function startQuiz() {
  let score = 0;

  alert("Welcome to the JavaScript Quiz! Click OK to begin.");

  // Loop through each question
  for (let i = 0; i < quiz.length; i++) {
    let userInput = prompt(quiz[i].question);

    // If user clicks cancel
    if (userInput === null) {
      alert("Quiz cancelled.");
      return;
    }

    // Clean and compare input
    userInput = userInput.toLowerCase().trim();

    if (userInput === quiz[i].answer) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert(`Wrong ❌ The correct answer is: ${quiz[i].answer}`);
    }
  }

  // Final score message
  alert(`Quiz completed! Your final score is: ${score} / ${quiz.length}`);
}

// Run the quiz
startQuiz();
