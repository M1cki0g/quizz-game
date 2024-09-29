let questions = [
  (qst1 = {
    question: "What is the capital of France?",
    answer: "paris",
  }),
  (qst2 = {
    question: "Who is the first person to climb Mount Everest?",
    answer: "larry king",
  }),
  (qst3 = {
    question: "What is the name of the largest island in the world?",
    answer: "greenland",
  }),
];

let quizz = document.getElementById("quizz");
let score1 = document.getElementById("score1");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
quizz.addEventListener("submit", function (event) {
  event.preventDefault();

  let score = 0;

  if (answer1.value.toLowerCase() == questions[0].answer.toLowerCase()) score++;
  if (answer2.value.toLowerCase() == questions[1].answer.toLowerCase()) score++;
  if (answer3.value.toLowerCase() == questions[2].answer.toLowerCase()) score++;
  score1.textContent = score;
});
