let gameLevel = 1;
let gamePoint = 0;
let minRange = 1;
let maxRange = 2;
let lives = 3;
let randomNumber = Math.floor(Math.random() * maxRange + minRange);

let userName = prompt("Hi, What is your name?");

while (!userName) {
	userName = prompt("Kindly Enter your name...");
}

game();

function game() {
	greeting();
	result();
	answers();

	function answers() {
		let playerGuess = prompt(
			`Guess a number between ${minRange} and ${maxRange}`
		);

		while (playerGuess !== randomNumber) {
			if (lives <= 0) {
				gameLost();
				return;
			} else if (Number.isNaN(parseInt(playerGuess))) {
				playerGuess = prompt("Please enter a number");
			} else if (playerGuess > randomNumber) {
				lives--;
				playerGuess = prompt(
					"Guess too high, try guessing a lower number"
				);
			} else if (lives < randomNumber) {
				lives--;
				playerGuess = prompt(
					"Guess too low, try guessing a higher number"
				);
			} else {
				gameWon();
				break;
			}
		}
	}

	function gameWon() {
		console.log("Sweet!!, you guessed right\nReady to go again?\n");
		prompt("Press enter to continue");
		gameLevel++;
		gamePoint++;
		maxRange++;
		randomNumber = Math.floor(Math.random() * maxRange + minRange);
		lives = 3 + Math.floor(gameLevel / 4);
		result();
		answers();
	}

	function gameLost() {
		console.log(
			"Ooops... sorry, you ran out of lives\nNice game, you did well"
		);
		result();
		console.log("Thanks for playing");
		return;
	}

	function result() {
		console.table({
			payer: userName,
			level: gameLevel,
			points: gamePoint,
			lives: lives,
		});
	}
}

function greeting() {
	console.log(`Hello ${userName}, You're welcome to my Number Guessing Game`);

	prompt("Press Enter to continue...");

	console.log(
		"\nThis is a game where you guess the number I have in mind\nAnd for every streak of 3 guesses, you get an additional live\nYou get started with 3 lives...\n"
	);
	let playGame = prompt("Are you ready?\tType yes or no ");
	while (playGame) {
		if (playGame.toUpperCase() === "YES") {
			console.log("Let's play..... \n");
			break;
		} else if (playGame.toUpperCase() === "NO") {
			console.log("\nThank you and Goodbye!!!\n");
			return;
		} else {
			playGame = prompt(
				"Kindly type 'yes' to play game or 'no' if you wanna chicken out"
			);
		}
	}
}
