class PatternDisplayView {
  constructor() {
    this._parentElement = document.getElementById('patternDisplayCircle');
    this._messageElement = document.querySelector('.circle--message');
    this._countdownElement = document.querySelector(
      '.circle--patternCountdown'
    );
  }

  render(computersColorPattern, turnStartFn) {
    this.clear();
    let counter = 0;
    let curColor;
    const patternLength = computersColorPattern.length;
    const intervalId = setInterval(() => {
      if (counter < patternLength * 2) {
        if (counter % 2 === 0) {
          curColor = computersColorPattern[counter / 2];
          this._parentElement.classList.add(`circle--color-${curColor}`);
        } else {
          this._parentElement.classList.remove(`circle--color-${curColor}`);
        }
        counter++;
        this._parentElement.classList.toggle('circle--hide');
      } else {
        clearInterval(intervalId);
        this.renderMessage('GO!');
        this._parentElement.classList.remove('circle--hide');
        turnStartFn();
      }
    }, 500);
  }

  renderMessage(text = 'Oops!') {
    this._messageElement.textContent = text;
  }

  renderCountdown(patternRemainingArr) {
    this._countdownElement.textContent = `${patternRemainingArr.length} Left`;
  }

  clear() {
    this._messageElement.textContent = '';
    this._countdownElement.textContent = '';
    this._parentElement.classList.add('circle--hide');
  }
}

export default new PatternDisplayView();
