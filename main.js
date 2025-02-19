const TOTAL_ROUNDS = 5;

const scoreMessageElement = document.querySelector("#score-message");

const humanChoiceElement = document.querySelector("#human-choice");
const humanScoreElement = document.querySelector("#human-score");

const computerChoiceElement = document.querySelector("#computer-choice");
const computerScoreElement = document.querySelector("#computer-score");

const roundsCountElement = document.querySelector("#rounds-count");
const roundsListElement = document.querySelector("#rounds-list");

const buttons = document.querySelectorAll("#buttons button");

const restartPanel = document.querySelector("#restart-panel");
const restartMessage = document.querySelector("#restart-message");
const restartGameButton = document.querySelector("#restart-button");

const choices = ["rock", "paper", "scissors"];
const choiceMap = { rock: "✊", paper: "✋", scissors: "✌" };

let gameOver = false;
let humanScore = 0;
let computerScore = 0;
let round = 1;

function createRoundsList() {
	roundsListElement.innerHTML = "";

	for (let i = 0; i < TOTAL_ROUNDS; i++) {
		const element = document.createElement("li");
		element.className = "rounds-item";
		element.dataset.status = "";
		roundsListElement.append(element);
	}
}

function resetGame() {
	gameOver = false;
	humanScore = 0;
	computerScore = 0;
	round = 1;

	scoreMessageElement.textContent = `The first to reach ${TOTAL_ROUNDS} points wins`;
	humanChoiceElement.textContent = "?";
	humanScoreElement.textContent = 0;
	computerChoiceElement.textContent = "?";
	computerScoreElement.textContent = 0;
	roundsCountElement.textContent = round;
	restartMessage.textContent = "";

	restartPanel.classList.remove("active");
	createRoundsList();
}

function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
	if (gameOver || round > TOTAL_ROUNDS) return;

	humanChoiceElement.textContent = choiceMap[humanChoice];
	computerChoiceElement.textContent = choiceMap[computerChoice];

	if (humanChoice === computerChoice) {
		scoreMessageElement.textContent = `You tied! ${humanChoice} ties with ${computerChoice}`;
		roundsListElement.children[round - 1].dataset.status = "tie";
	} else if (
		(humanChoice === "rock" && computerChoice === "paper") ||
		(humanChoice === "paper" && computerChoice === "scissors") ||
		(humanChoice === "scissors" && computerChoice === "rock")
	) {
		computerScore++;
		scoreMessageElement.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
		roundsListElement.children[round - 1].dataset.status = "lose";
	} else {
		humanScore++;
		scoreMessageElement.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
		roundsListElement.children[round - 1].dataset.status = "win";
	}

	roundsCountElement.textContent = round;
	displayScore();

	if (round === TOTAL_ROUNDS) {
		checkWinner();
	} else {
		round++;
	}
}

function displayScore() {
	humanScoreElement.textContent = humanScore;
	computerScoreElement.textContent = computerScore;
}

function checkWinner() {
	gameOver = true;

	if (humanScore === computerScore) {
		restartMessage.textContent = "It's a tie!";
	} else if (humanScore > computerScore) {
		restartMessage.textContent = "🎉 Congratulations! You won the game.";
	} else {
		restartMessage.textContent = "😢 Sorry, you lost the game.";
	}

	restartPanel.classList.add("active");
}

buttons.forEach((button) => {
	button.addEventListener("click", function (event) {
		if (gameOver) return;

		const humanChoice = button.dataset.choice;
		const computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice);
	});
});

restartGameButton.addEventListener("click", resetGame);

document.addEventListener("DOMContentLoaded", resetGame);
