const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let gameLevel = 1;
let gamePoint = 0;
let minRange = 1;
let maxRange = 2;
let lives = 3;
let randomNumber = generateRandomNumber();

let userName = "";

function askName() {
	rl.question("Hi, What is your name? ", (answer) => {
		if (answer.trim() === "") {
			askName(); // Ask again if name is empty
		} else {
			userName = answer.trim();
			game(); // Start the game
		}
	});
}

askName();

function generateRandomNumber() {
	return Math.floor(Math.random() * maxRange + minRange);
}

function game() {
	greeting();
	result();
	answers();

	function answers() {
		rl.question(
			`Guess a number between ${minRange} and ${maxRange}: `,
			(playerGuess) => {
				while (playerGuess !== randomNumber) {
					if (lives <= 0) {
						gameLost();
						return;
					} else if (Number.isNaN(parseInt(playerGuess))) {
						rl.question("Please enter a number: ", (answer) => {
							playerGuess = answer;
						});
					} else if (playerGuess > randomNumber) {
						lives--;
						rl.question(
							"Guess too high, try guessing a lower number: ",
							(answer) => {
								playerGuess = answer;
							}
						);
					} else if (playerGuess < randomNumber) {
						lives--;
						rl.question(
							"Guess too low, try guessing a higher number: ",
							(answer) => {
								playerGuess = answer;
							}
						);
					} else {
						gameWon();
						break;
					}
				}
			}
		);
	}

	function gameWon() {
		console.log("Sweet!!, you guessed right\nReady to go again?\n");
		rl.question("Press enter to continue", () => {
			gameLevel++;
			gamePoint++;
			maxRange++;
			randomNumber = generateRandomNumber();
			lives = 3 + Math.floor(gameLevel / 4);
			result();
			answers();
		});
	}

	function gameLost() {
		console.log(
			"Oops... sorry, you ran out of lives\nNice game, you did well"
		);
		result();
		console.log("Thanks for playing");
		rl.close();
	}

	function result() {
		console.table({
			player: userName,
			level: gameLevel,
			points: gamePoint,
			lives: lives,
		});
	}
}

function greeting() {
	console.log(`Hello ${userName}, You're welcome to my Number Guessing Game`);
	rl.question("Press Enter to continue...", () => {
		console.log(
			"\nThis is a game where you guess the number I have in mind\nAnd for every streak of 3 guesses, you get an additional live\nYou get started with 3 lives...\n"
		);
		rl.question("Are you ready?\tType yes or no: ", (answer) => {
			while (answer) {
				if (answer.toUpperCase() === "YES") {
					console.log("Let's play..... \n");
					break;
				} else if (answer.toUpperCase() === "NO") {
					console.log("\nThank you and Goodbye!!!\n");
					rl.close();
					return;
				} else {
					rl.question(
						"Kindly type 'yes' to play game or 'no' if you wanna chicken out: ",
						(answer) => {
							answer = answer;
						}
					);
				}
			}
		});
	});
}
