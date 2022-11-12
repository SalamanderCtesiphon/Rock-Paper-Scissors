sampleChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return sampleChoices[Math.floor(Math.random() * sampleChoices.length)];
}

console.log(getComputerChoice());