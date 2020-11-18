class TitleView {
  constructor() {
    this._parentElement = document.querySelector('.title');
  }

  render(colorArr) {
    const newTitleMarkup = this._generateMarkup(colorArr);
    this._clearContent();
    this._parentElement.innerHTML = newTitleMarkup;
  }

  _generateMarkup(colorArr) {
    const titleMarkup = this._parentElement.textContent
      .split('')
      .map((letter, i) => {
        return `<span class="title__letter--color-${
          i % colorArr.length
        }">${letter}</span>`;
      })
      .join('');

    return titleMarkup;
  }

  _clearContent() {
    this._parentElement.innerHTML = '';
  }
}

export default new TitleView();

// const colorizeTitle = () => {
//   title.textContent = '';
//   title.insertAdjacentHTML('afterbegin', titleArray.join(''));
// };
