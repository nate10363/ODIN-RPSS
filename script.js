const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    let randomInteger = Math.floor(Math.random() * 3);
    return options[randomInteger];
}

function playerChoice() {
    let choiceRaw = prompt("Who is your champion? rock paper scissors");
    let choiceCI = choiceRaw.toLowerCase();
    return choiceCI;
}



function playRound() {
    // iteration of a user playing a single round
    let computerSelection = computerChoice();
    let playerSelection = playerChoice();
    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        computerScore++;
        return console.log("P: " + playerSelection + " C: " + computerSelection + " // P: " + playerScore + " C: " + computerScore);
    }
    if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        playerScore++;
        return console.log("P: " + playerSelection + " C: " + computerSelection + " // P: " + playerScore + " C: " + computerScore);
    }
    if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        computerScore++;
        return console.log("P: " + playerSelection + " C: " + computerSelection + " // P: " + playerScore + " C: " + computerScore);
    }
    if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        return console.log("P: " + playerSelection + " C: " + computerSelection + " // P: " + playerScore + " C: " + computerScore);
    }
    if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        computerScore++
        return console.log("P: " + playerSelection + " C: " + computerSelection + " // P: " + playerScore + " C: " + computerScore);
    }
    if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        return console.log("P: " + playerSelection + " C: " + computerSelection + " // P: " + playerScore + " C: " + computerScore);;
    }
    if (playerSelection === computerSelection) {
        return console.log("tie round! P: " + playerSelection + " C: " + computerSelection + " // P: " + playerScore + " C: " + computerScore);
    }
}



function game() {
    // game iterated with for loop
    let numGames = prompt("How many games to play?");
    if (numGames > 0) {
        for (let i = 0; i < numGames; i++) {
            playRound(i);
        }
    }
}



function gameDictate() {
    if (playerScore > computerScore) {
        console.log("Congrats, idiot! you win !");
    } else if (playerScore < computerScore) {
        console.log("Sorry, idiot! you lose !");
    } else {
        console.log("Tie game!");
    }
}



function finale() {
    game();
    gameDictate();
}

