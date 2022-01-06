export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeEscHandle = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add('popup__opened');
    document.addEventListener('keydown', this._closeEscHandle);
  }

  close() {
    this._popup.classList.remove('popup__opened');
    document.removeEventListener('keydown', this._closeEscHandle);
  }
  
  _handleEscClose (evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__opened')) {
          this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
          this.close()
      }
    })
  }
}
