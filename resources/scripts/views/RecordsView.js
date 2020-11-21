class RecordsView {
  constructor() {
    this._parentElement = document.getElementById('gameRecords');
  }

  render(personalBest) {
    this._clear();
    const markup = this._generateMarkup(personalBest);
    this._parentElement.innerHTML = markup;
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup(personalBest) {
    const markup = `
      <span class="records records__personalBest">Personal Best: ${personalBest} round${
      personalBest === 1 ? '' : 's'
    }</span>
    `;

    return markup;
  }
}

export default new RecordsView();
