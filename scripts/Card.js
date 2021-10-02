export class Card {
  constructor(name, link, cardSelector, elementClickHandler) {
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._elementClickHandler = elementClickHandler;
  }
  _getTemplate() {
      return document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
  }
  generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__image').alt = this._name;
      this._element.querySelector('.card__image').src = this._link;
      this._element.querySelector('.card__title').textContent = this._name;
      this._setEventListeners();
      return this._element;
  }
  _deleteCard() {
      this._element.remove();
      this._element = null;
  }
  _likeCard() {
      const buttonLike = this._element.querySelector('.card__like-button');
      buttonLike.classList.toggle('card__like-button_fill');
  }
  _setEventListeners() {
      this._element.querySelector('.card__like-button').addEventListener('click', () => {
          this._likeCard()
      });
      this._element.querySelector('.element__delete').addEventListener('click', () => {
          this._deleteCard()
      });
      this._element.querySelector('.card__image').addEventListener('click', this._elementClickHandler);
  }
}