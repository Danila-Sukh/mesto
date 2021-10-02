import {
  elementTemplate,
  popupViewerImage,
  popupViewerTitle,
  popupImage, 
  openPopup,
  closePopup
} from "./utilities.js";
import { Card } from './Card.js';
import FormValidator from "./FormValidator.js";


const openPopupButton = document.querySelector('.profile__edit-button');
const openPopupAddCardButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_profile-edit');  
const popupAddCard = document.querySelector('.popup_type_add-card');
const closePopupButton = document.querySelector('.popup__close');
const closePopupAddCardButton = document.querySelector('.popup__close_type_add-card');
const formElementAddCard = document.querySelector('.popup__form_type_add-card')
const nameInput = document.querySelector('.popup__input_is_name');
const jobInput = document.querySelector('.popup__input_is_job');
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__description')
const cardContainer = document.querySelector('.elements');
const popupBigSizeImg = document.querySelector('.popup_big-size-image');
const popupCloseBigImg = document.querySelector('.popup__close_type_big-image');
const image = document.querySelector('.popup__input_card_link');
const name = document.querySelector('.popup__input_card_name');

function openPofilePopup() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePofilePopup() {
  closePopup(popupProfile);
}

// Попапа редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePofilePopup();
  validFormProfile.toggleButtonState();
}

// Попапа формы добавления карточки
function formSubmitCard(evt) { 
  evt.preventDefault(); 
  renderCard(image.value, name.value); 
  name.value = ''; 
  image.value = ''; 
  closePopup(popupAddCard); 
  validformSubmitCard.toggleButtonState();
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//загрузка карточек из массива
function renderCard(name, link) {
  const card = createCard(name, link)
  cardContainer.prepend(card.generateCard());
}

function createCard(name, link) {
  return new Card(name, link,  '#element-template', elementClickHandler);
}

function renderInitialCards() {
  initialCards.forEach((card) => renderCard(card.name, card.link))
}

renderInitialCards();

function elementClickHandler(event) {
  const imgSrc = event.target.src;
  const nameImg = event.target.parentNode.textContent
  openPopup(popupImage);
  document.querySelector('.popup__big-img').src = imgSrc;
  document.querySelector('.popup__name-big-img').textContent = nameImg;
}


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'error_visible'
};

openPopupButton.addEventListener('click', openPofilePopup);
closePopupButton.addEventListener('click', closePofilePopup);
popupProfile.addEventListener('submit', formSubmitHandler);
formElementAddCard.addEventListener('submit', formSubmitCard);
popupCloseBigImg.addEventListener('click', popupBigSizeImg);
openPopupAddCardButton.addEventListener('click', () => openPopup(popupAddCard));
closePopupAddCardButton.addEventListener('click', () => closePopup(popupAddCard));
popupCloseBigImg.addEventListener('click', () => closePopup(popupBigSizeImg));

const validformSubmitCard = new FormValidator(validationConfig, popupAddCard);
validformSubmitCard.enableValidation();
const validFormProfile = new FormValidator(validationConfig, popupProfile);
validFormProfile.enableValidation();