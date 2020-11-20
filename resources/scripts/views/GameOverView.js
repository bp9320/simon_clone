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

  _clear() {
    this._parentElement.querySelector('.gameOver__message').textContent = '';
  }

  _generateMarkup(roundsPassed) {
    return `You lasted ${roundsPassed} round${roundsPassed === 1 ? '' : 's'}!`;
  }
}

export default new GameOverView();
