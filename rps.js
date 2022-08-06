function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  const player = "You";
  const computer = "Computer";
  const winOrLose = ["wins", "loses"];

  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    winningPlayer = player;
    winningWeapon = "Rock";
    losingWeapon = "Scissors";
  }
  console.log(
    `${winningPlayer} ${winOrLose}! ${winningWeapon} beats ${losingWeapon}`
  );
}

const playerSelection = prompt().toLowerCase();
console.log(playerSelection);

const computerSelection = getComputerChoice();
console.log(computerSelection);
