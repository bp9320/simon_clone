class PatternDisplayView {
  constructor() {
    this._parentElement = document.getElementById('patternDisplayCircle');
  }

  render(computersColorPattern, turnStartFn) {
    this._clear();
    let counter = 0;
    let curColor;
    const patternLength = computersColorPattern.length;
    const intervalId = setInterval(() => {
      if (counter < patternLength * 2) {
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
        patternDisplayCircle.classList.remove('circle--hide');
        turnStartFn();
      }
    }, 500);
  }

  _clear() {
    this._parentElement.textContent = '';
    this._parentElement.classList.add('circle--hide');
  }
}

export default new PatternDisplayView();
