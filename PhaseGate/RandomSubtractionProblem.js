// RandomSubtractionProblem.js


const prompt = require('prompt-sync')();

let totalQuestions = 10;
let answerCount = 0;

function randomSubtractionProblem() {
let number1 = Math.floor(Math.random() * 1000);
let number2 = Math.floor(Math.random() * 1000);

const minuend = Math.max(number1, number2);
const subtrahend = Math.min(number1, number2);

return {
question: `What is ${minuend} - ${subtrahend}? `,
answer:  minuend - subtrahend
};
}

function questionAsk() {
  const problem = randomSubtractionProblem();
  console.log(problem.question);

  let attemptsLeft = 2;
  const startTime = Date.now();

  while (attemptsLeft > 0) {
    const userAnswer = Number(prompt("Enter your Answer: "));
    const answerNumber = Number(userAnswer);
	
    if (isNaN(answerNumber)) {
      console.log("Please enter a valid number.");
      continue;
    }
    if (answerNumber === problem.answer) {
      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`You are Correct! The Time taken is: ${timeTaken} seconds`);
      answerCount++;
      return;
    } else {
      attemptsLeft--;
      if (attemptsLeft > 0) {
        console.log(`You are Wrong! Please Try again. The Attempts left is: ${attemptsLeft}`);
      }
        else {
        const timeTaken = ((Date.now() - startTime)/ 1000).toFixed(2);
        console.log(`You're Wrong again. The correct answer was ${problem.answer}.`);
        console.log(`The Time taken is: ${timeTaken} seconds`);
      } 
     }
  }
}


for (let i = 0; i < totalQuestions; i++) {
  const correct = questionAsk();
  if (correct) {
    answerCount++;
  }
}
console.log(`Thank You!! You answered ${answerCount} out of ${totalQuestions} correctly. Have a nice Day`);

