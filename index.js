sampleChoices = ['rock', 'paper', 'scissors'];
// const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
let result = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
  return sampleChoices[Math.floor(Math.random() * sampleChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return result = 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return result = 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return result = 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return result = 'You Win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return result = 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return result = 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return result = 'You Win! Scissors beats Paper';
    } else {
        return result = 'Invalid Input';
    }  
}

/* function game(playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(result);
        if ( result === 'You Win! Rock beats Scissors' || result === 'You Win! Paper beats Rock' || result === 'You Win! Scissors beats Paper') {
            playerScore++;
        } else if ( result === 'You Lose! Paper beats Rock' || result === 'You Lose! Scissors beats Paper' || result === 'You Lose! Rock beats Scissors') {
            computerScore++;
        }
    }
} */

function finalResults () {
    if (playerScore > computerScore) {
        return 'You Win!';
    } else if (playerScore < computerScore) {
        return 'You Lose!';
    } else {
        return 'Tie';
    }
}


//test the code
/* game(playerSelection, computerSelection);
console.log(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);
console.log('Final Results: ' + finalResults()); */


// Path: index.html
const results = document.querySelector('.results');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', playRock);

function playRock(e) {
    playerSelection = 'rock';
    playerChoice.textContent = 'Player chooses: ' + playerSelection;
    computerSelection = getComputerChoice();
    computerChoice.textContent = 'Computer chooses: ' + computerSelection;
    e.stopPropagation();
}

paper.addEventListener('click', playPaper);

function playPaper(e) {
    playerSelection = 'paper';
    playerChoice.textContent = 'Player chooses: ' + playerSelection;
    computerSelection = getComputerChoice();
    computerChoice.textContent = 'Computer chooses: ' + computerSelection;
    e.stopPropagation();
}

scissors.addEventListener('click', playScissors);

function playScissors(e) {
    playerSelection = 'scissors';
    playerChoice.textContent = 'Player chooses: ' + playerSelection;
    computerSelection = getComputerChoice();
    computerChoice.textContent = 'Computer chooses: ' + computerSelection;
    e.stopPropagation();
}

const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');


const playGame = document.querySelector('.playGame');

playGame.addEventListener('click', playOnce);


// play until 5 wins

const playerResults = document.querySelector('.playerScore');
const computerResults = document.querySelector('.computerScore');
const finalWinner = document.querySelector('.finalWinner');

function playOnce(e) {
    playRound(playerSelection, computerSelection);
    results.textContent = result;
    if ( result === 'You Win! Rock beats Scissors' || result === 'You Win! Paper beats Rock' || result === 'You Win! Scissors beats Paper') {
        playerScore++;
        playerResults.textContent = "Player Score: " + playerScore;

    } else if ( result === 'You Lose! Paper beats Rock' || result === 'You Lose! Scissors beats Paper' || result === 'You Lose! Rock beats Scissors') {
        computerScore++;
        computerResults.textContent = "Computer Score: " + computerScore;
    }
    if (playerScore === 5 || computerScore === 5) {
        results.textContent = finalResults();
        playerResults.textContent = "Player Score: " + playerScore;
        computerResults.textContent = "Computer Score: " + computerScore;
        finalWinner.textContent = 'Final Winner: ' + finalResults();

    }
    e.stopPropagation();
}


   