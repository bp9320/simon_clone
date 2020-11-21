import * as model from './model.js';
import titleView from './views/TitleView.js';
import introView from './views/IntroView.js';
import patternDisplayView from './views/PatternDisplayView.js';
import playerInputsView from './views/PlayerInputsView.js';
import gameOverView from './views/GameOverView.js';

const controlPlayGame = () => {
  model.toggleGameActive();
  introView.hide();
  setTimeout(runComputersTurn, 3000);
};

const startPlayersTurn = () => {
  model.setPlayersColorPattern();
  model.togglePlayersTurn();
  patternDisplayView.renderCountdown(model.state.playersColorPattern);
};

const runComputersTurn = () => {
  model.addToComputersColorPattern();
  patternDisplayView.render(
    model.state.computersColorPattern,
    startPlayersTurn
  );
};

const controlCheckPlayerInput = function (playerInput) {
  if (!model.state.playersTurn) return;
  const nextColorInPlayerPattern = model.getNextPlayerPatternColor();
  if (playerInput !== nextColorInPlayerPattern) {
    endGame();
  } else {
    patternDisplayView.renderCountdown(model.state.playersColorPattern);
    checkIfTurnEnded();
  }
};

const controlResetGame = function () {
  model.resetGame();
  patternDisplayView.clear();
  controlPlayGame();
};

const checkIfTurnEnded = () => {
  if (model.state.playersColorPattern.length === 0) {
    endTurn();
  }
};

const endTurn = () => {
  model.increaseRoundsPassed();
  model.togglePlayersTurn();
  runComputersTurn();
};

const endGame = () => {
  model.toggleGameActive();
  patternDisplayView.renderMessage();
  gameOverView.render(model.state.roundsPassed);
};

const init = function () {
  titleView.render(model.state.colors);

  document.addEventListener('DOMContentLoaded', () => {
    introView.addHandlerStartGame(controlPlayGame);
    playerInputsView.addHandlerInputCircle(controlCheckPlayerInput);
    gameOverView.addHandlerReset(controlResetGame);
  });
};

init();
