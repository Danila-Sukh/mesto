import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super (popupSelector);

    this._image = this._popup.querySelector('.popup__big-img')
    this._imageTitle = this._popup.querySelector('.popup__name-big-img')
  }

  open(title, src) {
    super.open();

    this._image.src = src;
    this._image.alt = title;
    this._imageTitle.textContent = title;
  }
}
