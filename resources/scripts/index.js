const domStrings = {
  patternDisplayCircle: "#patternDisplayCircle",
};

var gameActive = false;
var playersTurn = false;

var computersColorPattern = [];
var playersColorPattern = [];

let colors = ["blue", "red", "yellow", "green"];

const playGame = () => {
  gameActive = true;
  runComputersTurn();
};

const runComputersTurn = () => {
  computersColorPattern.push(Math.floor(Math.random() * colors.length));
  displayPattern();
};

const startPlayersTurn = () => {
  playersColorPattern = computersColorPattern.map((val) => val.toString());
  playersTurn = true;
};

const patternDisplayCircle = document.querySelector(
  domStrings.patternDisplayCircle
);

let displayPattern = () => {
  let counter = 0;
  let intervalId = setInterval(() => {
    if (counter < computersColorPattern.length * 2) {
      if (counter % 2 === 0) {
        patternDisplayCircle.style.backgroundColor =
          colors[computersColorPattern[counter / 2]];
      }
      counter++;
      patternDisplayCircle.classList.toggle("circle--hide");
    } else {
      clearInterval(intervalId);
      alert("Players turn");
      startPlayersTurn();
    }
  }, 500);
};

let playerCircleClickHandler = (e) => {
  if (e.target.dataset.colorIndex && playersTurn) {
    checkPlayerGuessedCorrectly(e.target.dataset.colorIndex);
  }
};

let checkPlayerGuessedCorrectly = (playerInput) => {
  console.log("Checking if player guessed correctly.");
  if (playerInput !== playersColorPattern.shift()) {
    console.log("Incorrect guess. Ending Game.");
    endGame();
  } else {
    console.log("Correct Guess");
    checkIfTurnEnded();
  }
};

let checkIfTurnEnded = () => {
  console.log("Checking if turn ended.");
  if (playersColorPattern.length === 0) {
    console.log("Ending Turn.");
    endTurn();
  }
};

let endTurn = () => {
  playersTurn = false;
  runComputersTurn();
};

let endGame = () => {
  gameActive = false;
  alert(
    `You lasted ${computersColorPattern.length - 1} round${
      computersColorPattern.length - 1 === 1 ? "" : "s"
    }!`
  );
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", playGame);
  document.addEventListener("click", playerCircleClickHandler);
});
