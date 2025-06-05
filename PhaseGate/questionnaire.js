// questionnaire.js
const prompt = require('prompt-sync')({sigint: true});

class Questionnaire {
	constructor() {
		this.Questions = [
			{ question: "What is the capital of Lagos?", answer: "b", options: { a: "Paris", b: "Ikeja", c: "New York", d: "Banana Island" } },
			{ question: "Who is the CEO of Tesla?", answer: "d", options: { a: "Bill Gates", b: "Tim Cook", c: "Jeff Bezos", d: "Elon Musk" } },
			{ question: "What club in England has the most trophies?", answer: "a", options: { a: "Manchester United", b: "Chelsea", c: "Liverpool", d: "Arsenal (hahaha)" } },
			{ question: "5 x 20?", answer: "c", options: { a: "200", b: "145", c: "100", d: "99" } },
			{ question: "16 x 4?", answer: "a", options: { a: "64", b: "23", c: "45", d: "60" } },
			{ question: "Who is the President of Nigeria?", answer: "a", options: { a: "Bola Ahmed Tinubu", b: "Kassim Shettima", c: "Nyesom Wike", d: "Nasir El Rufai" } },
			{ question: "Who is the President of the United States of America?", answer: "d", options: { a: "Bill Gates", b: "Barack Obama", c: "Joe Biden", d: "Donald Trump" } },
			{ question: "50 + 362?", answer: "b", options: { a: "500", b: "412", c: "644", d: "402" } },
			{ question: "Who is the richest man in the world?", answer: "c", options: { a: "Jeff Bezos", b: "Bill Gates", c: "Elon Musk", d: "Mark Zuckerberg" } },
			{ question: "Who is the CEO of Facebook?", answer: "a", options: { a: "Mark Zuckerberg", b: "Tim Cook", c: "Jeff Bezos", d: "Elon Musk" } }
		];

		this.questionsShuffled = this.shuffle([...this.Questions]);
		this.answeredQuestions = new Set();
		this.score = 0;
		this.attemptedQuestion = 0;
		this.missedQuestions = [];
	}

	shuffle(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	quizApp() {
		console.log("=== Questionnaire ===\n");

		while (this.answeredQuestions.size < 10) {
			let input = prompt("Please Pick a question number from (1-10) or type 'exit' to cancel: ").trim();

			if (input.toLowerCase() === 'exit') {
				console.log("Goodbye! Have a nice day!");
				break;
			}

			let questionNumber = parseInt(input);
			if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > 10) {
				console.log("Invalid input. Please choose a number between 1 and 10.\n");
				continue;
			}

			if (this.answeredQuestions.has(questionNumber)) {
				console.log("You have already answered that question. Try another.\n");
				continue;
			}

			this.answeredQuestions.add(questionNumber);

			let currentQuestion = this.questionsShuffled[questionNumber - 1];
			console.log(`\nQ${questionNumber}: ${currentQuestion.question}`);
			for (let option in currentQuestion.options) {
				console.log(`  ${option.toUpperCase()}: ${currentQuestion.options[option]}`);
			}

			let attempts = 0;
			let correct = false;

			while (attempts < 3) {
				let answer = prompt("Your answer (a/b/c/d): ").toLowerCase();
				if (["a", "b", "c", "d"].includes(answer)) {
					if (answer === currentQuestion.answer) {
						console.log("You are Correct!\n");
						this.score++;
						correct = true;
						break;
					} else {
						console.log("Incorrect! You're Wrong! Try again.");
						attempts++;
						if (attempts < 3) console.log("Try again.\n");
					}
				} else {
					console.log("Invalid choice. Please Choose either a, b, c, or d.");
				}
			}

			this.attemptedQuestion++;

			if (!correct) {
				this.missedQuestions.push({
					question: currentQuestion.question,
					correctAnswer: currentQuestion.options[currentQuestion.answer]
				});
				console.log(`Correct answer was: ${currentQuestion.answer.toUpperCase()}: ${currentQuestion.options[currentQuestion.answer]}\n`);
			}
		}

		console.log("\n=== Quiz Completed ===");
		console.log("\n=== Here's a breakdown of your performance ===");

		console.log(`Score: ${this.score}/${this.attemptedQuestion}`);

		if (this.missedQuestions.length > 0) {
			console.log("\nHere are the Questions you missed:");
			this.missedQuestions.forEach((item, index) => {
				console.log(`\n${index + 1}. ${item.question}`);
				console.log(`  The Correct Answer: ${item.correctAnswer}`);
			});
		}
	}
}

const quiz = new Questionnaire();
quiz.quizApp();
