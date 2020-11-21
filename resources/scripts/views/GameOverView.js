class GameOverView {
  constructor() {
    this._parentElement = document.getElementById('gameOverSection');
  }

  render(roundsPassed) {
    this._clear();
    this._parentElement.classList.remove('hidden');
    const markup = this._generateMarkup(roundsPassed);
    this._parentElement.querySelector(
      '.gameOver__message'
    ).textContent = markup;
  }

  _hide() {
    this._parentElement.classList.add('hidden');
  }

  _clear() {
    this._parentElement.querySelector('.gameOver__message').textContent = '';
  }

  _generateMarkup(roundsPassed) {
    return `You lasted ${roundsPassed} round${roundsPassed === 1 ? '' : 's'}!`;
  }

  _resetGame(handler) {
    this._hide();
    handler();
  }

  addHandlerReset(handler) {
    this._parentElement
      .querySelector('.gameOver__btn')
      .addEventListener('click', this._resetGame.bind(this, handler));
  }
}

export default new GameOverView();
