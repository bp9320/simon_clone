class IntroView {
  constructor() {
    this._parentElement = document.querySelector('.intro');
  }

  hide() {
    this._parentElement.classList.add('intro--hidden');
  }

  addHandlerStartGame(handler) {
    this._parentElement
      .querySelector('#btn')
      .addEventListener('click', handler);
  }
}

export default new IntroView();
