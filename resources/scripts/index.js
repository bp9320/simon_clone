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
    checkIfTurnEnded();
  }
};

const checkIfTurnEnded = () => {
  if (model.state.playersColorPattern.length === 0) {
    endTurn();
  }
};

const endTurn = () => {
  model.togglePlayersTurn();
  runComputersTurn();
};

const endGame = () => {
  model.toggleGameActive();
  gameOverView.render(model.state.computersColorPattern.length - 1);
  // alert(
  //   `You lasted ${model.state.computersColorPattern.length - 1} round${
  //     model.state.computersColorPattern.length - 1 === 1 ? '' : 's'
  //   }!`
  // );
};

const init = function () {
  titleView.render(model.state.colors);

  document.addEventListener('DOMContentLoaded', () => {
    introView.addHandlerStartGame(controlPlayGame);
    playerInputsView.addHandlerInputCircle(controlCheckPlayerInput);
  });
};

init();
