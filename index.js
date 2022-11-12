sampleChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return sampleChoices[Math.floor(Math.random() * sampleChoices.length)];
}

const playerSelection = 'rock';
let result = '';
let computerSelection = '';
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
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


let playerScore = 0;
let computerScore = 0;

function game(playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(result);
        if ( result === 'You Win! Rock beats Scissors' || result === 'You Win! Paper beats Rock' || result === 'You Win! Scissors beats Paper') {
            playerScore++;
        } else if ( result === 'You Lose! Paper beats Rock' || result === 'You Lose! Scissors beats Paper' || result === 'You Lose! Rock beats Scissors') {
            computerScore++;
        }
    }
}

game(playerSelection, computerSelection);

/* console.log('player: ' + playerChoice);
console.log('computer: ' + computerChoice);
console.log(playRound(playerSelection, computerSelection));
console.log('player score: ' + playerScore);
console.log('computer score: ' + computerScore); */