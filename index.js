const playerSelection = 'rock';
const computerSelection = getComputerChoice();

let result = '';sampleChoices = ['rock', 'paper', 'scissors'];
let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1); 

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

console.log('player: ' + playerChoice);
console.log('computer: ' + computerChoice);
console.log(playRound(playerSelection, computerSelection));
