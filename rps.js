function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  const player = "You";
  const computer = "Computer";

  if (playerSelection == computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    winningPlayer = player;
    winningWeapon = playerSelection;
    losingWeapon = computerSelection;
  } else {
    winningPlayer = computer;
    winningWeapon = computerSelection;
    losingWeapon = playerSelection;
  }
  return `${winningPlayer} win! ${winningWeapon} beats ${losingWeapon}`;
}

const playerSelection = prompt().toLowerCase();
console.log(playerSelection);

const computerSelection = getComputerChoice();
console.log(computerSelection);

playRound(playerSelection, computerSelection);

function game() {}
