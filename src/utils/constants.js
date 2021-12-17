export {
  openPopupProfileButton,
  cardContainer,
  profileName,
  profileJob,
  nameInputElement,
  aboutInputElement,
  profilePopup,
  openPopupAddCardButton
};

const openPopupProfileButton = document.querySelector('.profile__edit-button');
const cardContainer = document.querySelector('.elements');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const profilePopup = document.querySelector('.popup_type_profile-edit');
const openPopupAddCardButton = document.querySelector('.profile__add-button');
const nameInputElement = document.querySelector('.popup__input_is_name');
const aboutInputElement = document.querySelector('.popup__input_is_job');