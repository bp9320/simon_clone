class PlayerInputsView {
  constructor() {
    this._parentElement = document.getElementById('playerInputs');
  }

  addHandlerInputCircle(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (!e.target.dataset.colorIndex) return;
      handler(e.target.dataset.colorIndex);
    });
  }
}

export default new PlayerInputsView();
