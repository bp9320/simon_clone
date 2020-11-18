export const state = {
  colors: ['blue', 'red', 'yellow', 'green'],
  gameActive: false,
  playersTurn: false,
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

export const getNextPlayerPatternColor = function () {
  return state.playersColorPattern.shift();
};
