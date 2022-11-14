sampleChoices = ['rock', 'paper', 'scissors'];
// const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
let result = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('.results');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerResults = document.querySelector('.playerScore');
const computerResults = document.querySelector('.computerScore');
const finalWinner = document.querySelector('.finalWinner');
const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const playGame = document.querySelector('.playGame');

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);
playGame.addEventListener('click', playOnce);

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

function finalResults () {
    if (playerScore > computerScore) {
        return 'You Win!';
    } else if (playerScore < computerScore) {
        return 'You Lose!';
    } else {
        return 'Tie';
    }
}
// Path: index.html

function playRock(e) {
    playerSelection = 'rock';
    playerChoice.textContent = 'Player chooses: ' + playerSelection;
    computerSelection = getComputerChoice();
    computerChoice.textContent = 'Computer chooses: ' + computerSelection;
    e.stopPropagation();
}

function playPaper(e) {
    playerSelection = 'paper';
    playerChoice.textContent = 'Player chooses: ' + playerSelection;
    computerSelection = getComputerChoice();
    computerChoice.textContent = 'Computer chooses: ' + computerSelection;
    e.stopPropagation();
}

function playScissors(e) {
    playerSelection = 'scissors';
    playerChoice.textContent = 'Player chooses: ' + playerSelection;
    computerSelection = getComputerChoice();
    computerChoice.textContent = 'Computer chooses: ' + computerSelection;
    e.stopPropagation();
}
// play until 5 wins

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


   