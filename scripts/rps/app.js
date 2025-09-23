//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLUSONEWIN = ;
/** @type { HTMLElement } */
//@ts-ignore
let aftermathElement = document.getElementById("aftermath");
let winCountElement = document.getElementById("winCounter");
let lossCountElement = document.getElementById("lossCounter");
let tieCountElement = document.getElementById("tieCounter");
let tieCount = 0;
let winCount = 0;
let lossCount = 0;

const selectComWeapon = function () {
	const rand = Math.floor(Math.random() * 3);

	if (rand == 0) {
		return ROCK;
	}
	if (rand == 1) {
		return PAPER;
	}
	return SCISSORS;
};

const buyPerk = function (perk){
		if(winCount >= 5){
			winCount -- 5;
		};
	};

function decideResults(player, com) {
	let results = {
		isTie: false,
		playerWin: false,
		comWin: false,
		description: "this shouldn't show",
	};
	if (player == com) {
		results.isTie = true;
		results.description = " It's a Tie";
		return results;
	}
	if (player == ROCK && com == SCISSORS) {
		results.playerWin = true;
		results.description = "Rock crushes Scissors";
		return results;
	}
	if (player == PAPER && com == ROCK) {
		results.playerWin = true;
		results.description = "Paper covers Rock";
		return results;
	}
	if (player == SCISSORS && com == PAPER) {
		results.playerWin = true;
		results.description = "Scissros cuts Paper";
		return results;
	}

	//comW is not needed but can be
	//spell out varialbes
	if (player == ROCK && com == PAPER) {
		results.comWin = true;
		results.description = "Rock gets covered by Paper";
		return results;
	}
	if (player == PAPER && com == SCISSORS) {
		results.comWin = true;
		results.description = "Paper gets cut by scissors";
		return results;
	}
	if (player == SCISSORS && com == ROCK) {
		results.comWin = true;
		results.description = "Scissors is crushed by Scissors";
		return results;
	}
	
}
const pickWeapon = function (weapon) {
	let afterText = `Player picked ${weapon}.`;

	console.log("Player picked", weapon);

	let computerWeapon = selectComWeapon();
	console.log("Com picked", computerWeapon);

	afterText += `Computer picked ${computerWeapon}`;
	let results = decideResults(weapon, computerWeapon);
	console.log("battle rusults", results);

	let winner = "Sholdn't show";
	if (results?.isTie) {
		winner = results.description;
		tieCount++;
	} else if (results?.playerWin) {
		winner = "Player Wins!";
		winCount++;
	} else {
		winner = "Computer Wins!";
		lossCount++;
	}

	afterText += `${winner} Because ${results?.description}`;
	//@ts-ignore
	aftermathElement.textContent = afterText;
	//@ts-ignore
	winCountElement.textContent = winCount;
	//@ts-ignore
	lossCountElement.textContent = lossCount;
	//@ts-ignore
	tieCountElement.textContent = tieCount;
};
