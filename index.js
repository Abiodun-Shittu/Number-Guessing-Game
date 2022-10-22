

function game() {
	let gameLevel = 1;
	let gamePoint = 0;
	let minRange = 1;
	let maxRange = 2;
	let lives = 3;
	let randomNumber = Math.floor((Math.random() * maxRange) + minRange)
	
	let userName = prompt("Hi, What is your name?");
	
	while (!userName) {
		userName = prompt("Kindly Enter your name...")
	}

	console.log(`Hello ${userName}, You're welcome to my Number Guessing Game`)

	prompt("Press Enter to continue...")

	console.log("This is a game where you guess the number I have in mind and for every streak of 3 guesses, you get an additional live\n You get started with 3 lives...")
	let playGame = prompt("Are you ready?\t Type yes or no");

	if (playGame.toUpperCase == "YES") {
		console.log("Let'")
	}
	else if (playGame.toUpperCase == "NO") {
		return;
	}
	else {
		playGame = prompt("Kindly type 'yes' to play game or 'no' if you wanna chicken out")
	}

}
