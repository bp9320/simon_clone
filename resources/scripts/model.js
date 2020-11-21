export const state = {
  colors: ['blue', 'red', 'yellow', 'green'],
  gameActive: false,
  playersTurn: false,
  roundsPassed: 0,
  personalBest: 0,
  computersColorPattern: [],
  playersColorPattern: [],
};

export const togglePlayersTurn = function () {
  state.playersTurn = state.playersTurn ? false : true;
};

export const toggleGameActive = function () {
  state.gameActive = state.gameActive ? false : true;
};

export const addToComputersColorPattern = function () {
  state.computersColorPattern.push(
    Math.floor(Math.random() * state.colors.length)
  );
};

export const setPlayersColorPattern = function () {
  state.playersColorPattern = state.computersColorPattern.map(val =>
    val.toString()
  );
};

export const increaseRoundsPassed = function () {
  state.roundsPassed++;
};

export const getNextPlayerPatternColor = function () {
  return state.playersColorPattern.shift();
};

export const getPersonalBest = function () {
  const personalBest = JSON.parse(localStorage.getItem('personalBest'));
  console.log(personalBest);
  if (!personalBest) return;

  state.personalBest = personalBest;
};

export const setPersonalBest = function () {
  state.personalBest = state.roundsPassed;
  localStorage.setItem('personalBest', JSON.stringify(state.personalBest));
};

export const resetGame = function () {
  this.state.gameActive = false;
  this.state.playersTurn = false;
  this.state.roundsPassed = 0;
  this.state.computersColorPattern = [];
  this.state.playersColorPattern = [];
};
