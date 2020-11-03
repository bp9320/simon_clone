const domStrings = {
  patternDisplayCircle: '#patternDisplayCircle',
  introSection: '.intro',
  title: '.title',
};

var gameActive = false;
var playersTurn = false;

var computersColorPattern = [];
var playersColorPattern = [];

let colors = ['blue', 'red', 'yellow', 'green'];

const colorizeTitle = () => {
  let title = document.querySelector(domStrings.title);
  let titleArray = title.textContent.split('').map((letter, i) => {
    return `<span class="title__letter--color-${
      i % colors.length
    }">${letter}</span>`;
  });
  title.textContent = '';
  title.insertAdjacentHTML('afterbegin', titleArray.join(''));
};

colorizeTitle();

const playGame = () => {
  gameActive = true;
  document
    .querySelector(domStrings.introSection)
    .classList.add('intro--hidden');
  setTimeout(runComputersTurn, 3000);
};

const runComputersTurn = () => {
  computersColorPattern.push(Math.floor(Math.random() * colors.length));
  displayPattern();
};

const startPlayersTurn = () => {
  playersColorPattern = computersColorPattern.map(val => val.toString());
  playersTurn = true;
};

const patternDisplayCircle = document.querySelector(
  domStrings.patternDisplayCircle
);

const displayPattern = () => {
  patternDisplayCircle.classList.add('circle--hide');
  patternDisplayCircle.innerText = '';
  let counter = 0;
  let curColor;
  let intervalId = setInterval(() => {
    if (counter < computersColorPattern.length * 2) {
      if (counter % 2 === 0) {
        curColor = computersColorPattern[counter / 2];
        patternDisplayCircle.classList.add(`circle--color-${curColor}`);
      } else {
        patternDisplayCircle.classList.remove(`circle--color-${curColor}`);
      }
      counter++;
      patternDisplayCircle.classList.toggle('circle--hide');
    } else {
      clearInterval(intervalId);
      patternDisplayCircle.innerText = 'GO!';
      patternDisplayCircle.style.removeProperty('background-color');
      patternDisplayCircle.classList.add('patternDisplayCircle--finished');
      patternDisplayCircle.classList.remove('circle--hide');
      startPlayersTurn();
    }
  }, 500);
};

let playerCircleClickHandler = e => {
  if (e.target.dataset.colorIndex && playersTurn) {
    checkPlayerGuessedCorrectly(e.target.dataset.colorIndex);
  }
};

let checkPlayerGuessedCorrectly = playerInput => {
  console.log('Checking if player guessed correctly.');
  if (playerInput !== playersColorPattern.shift()) {
    console.log('Incorrect guess. Ending Game.');
    endGame();
  } else {
    console.log('Correct Guess');
    checkIfTurnEnded();
  }
};

let checkIfTurnEnded = () => {
  console.log('Checking if turn ended.');
  if (playersColorPattern.length === 0) {
    console.log('Ending Turn.');
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
      computersColorPattern.length - 1 === 1 ? '' : 's'
    }!`
  );
};
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', playGame);
  document.addEventListener('click', playerCircleClickHandler);
});
