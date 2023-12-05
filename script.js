const options = ["🗿", "📄", "✂️"];

let playerValue = 0;
let computerValue = 0;


let winner = '';
let gameWinner = ''

function computerChoice() {
    let randomInteger = Math.floor(Math.random() * 3);
    return options[randomInteger];
}

// User interface javascript to html connect

const playerFob = document.querySelector('#playerFob');
const computerFob = document.querySelector('#computerFob');

const choicesContainer = document.querySelector('#choicesContainer');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const playerScorePara = document.querySelector('#playerScorePara');
playerScorePara.innerText = `${playerValue}`;
const computerScorePara = document.querySelector('#computerScorePara');
computerScorePara.innerText = `${computerValue}`;

const roundWinnerPara = document.querySelector("#round-winner-span");
roundWinnerPara.innerText = `${winner}`;

const gameWinnerPara = document.querySelector('#game-winner');


// Player selecting their fob

const playerSelection = function playerChoice() {
    if (playerFob.textContent === '🗿') {
        playerSelection = '🗿';
    }
    if (playerFob.textContent === '📄') {
        playerSelection = '📄';
    }
    if (playerFob.textContent === '✂️') {
        playerSelection = '✂️';
    }
}


// playRound function 

const playRoundVar = (computerSelection, playerSelection) => {
    if ((playerSelection === "🗿") && (computerSelection === "📄") || 
        (playerSelection === "📄") && (computerSelection === "✂️") || 
        (playerSelection === "✂️") && (computerSelection === "🗿")) {
            computerValue++;
            winner = "computer";
    }

    if ((playerSelection === "🗿") && (computerSelection === "✂️") || 
        (playerSelection === "📄") && (computerSelection === "🗿") || 
        (playerSelection === "✂️") && (computerSelection === "📄")) {
            playerValue++;
            winner = "player";
    }

    if (playerSelection === computerSelection) {
            winner = "tie";
    }
}

const updateScores = (playerValue, computerValue) => {
    playerScorePara.innerText = `${playerValue}`;
    computerScorePara.innerText = `${computerValue}`;
}

const updateRoundWinner = (winner) => {
    if (winner === 'computer') {
        roundWinnerPara.innerText = `Computer`;
    }

    if (winner === 'player') {
        roundWinnerPara.innerText = `Player`;
    }

    if (winner === 'tie') {
        roundWinnerPara.innerText = `Tie`;
    }
}

const updateGameWinner = (playerValue, computerValue) => {
    if (playerValue === 5) {
        gameWinnerPara.innerText = `Game Winner: Player!`
        choicesContainer.removeChild(rockButton);
        choicesContainer.removeChild(paperButton);
        choicesContainer.removeChild(scissorsButton);
    }

    if (computerValue === 5) {
        gameWinnerPara.innerText = `Game Winner: Computer!`
        choicesContainer.removeChild(rockButton);
        choicesContainer.removeChild(paperButton);
        choicesContainer.removeChild(scissorsButton);
    }
}




rockButton.addEventListener('click', () => {
    const playerSelection = '🗿';
    playerFob.innerText = playerSelection;
    const computerSelection = computerChoice();
    computerFob.innerText = computerSelection;

    playRoundVar(computerSelection, playerSelection);
    updateScores(playerValue, computerValue);
    updateRoundWinner(winner);
    updateGameWinner(playerValue, computerValue);
});

paperButton.addEventListener('click', () => {
    const playerSelection = '📄';
    playerFob.innerText = playerSelection;
    const computerSelection = computerChoice();
    computerFob.innerText = computerSelection;

    playRoundVar(computerSelection, playerSelection);
    updateScores(playerValue, computerValue);
    updateRoundWinner(winner);
    updateGameWinner(playerValue, computerValue);
});

scissorsButton.addEventListener('click', () => {
    const playerSelection = '✂️';
    playerFob.innerText = playerSelection;
    const computerSelection = computerChoice();
    computerFob.innerText = computerSelection;
    

    playRoundVar(computerSelection, playerSelection);
    updateScores(playerValue, computerValue);
    updateRoundWinner(winner);
    updateGameWinner(playerValue, computerValue);
});


