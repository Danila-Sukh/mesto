export {
  openPopupProfileButton,
  cardContainer,
  profileName,
  profileJob,
  profilePopup,
  openPopupAddCardButton,
  popupButtonList,
  nameInputElement,
  jobInputElement,
  avatarInputElement,
  avatarEditButton,
  buttonDeliteСonfirmation,
  saveButtonCardAdd,
  saveButtonProfile,
  saveButtonAvatar
};

const openPopupProfileButton = document.querySelector('.profile__edit-button');
const saveButtonCardAdd = document.querySelector('.popup__button_invalid');
const saveButtonProfile = document.querySelector('.popup__button-profile');
const saveButtonAvatar = document.querySelector('.popup__button_save_avatar');

const cardContainer = document.querySelector('.elements');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const profilePopup = document.querySelector('.popup_type_profile-edit');
const openPopupAddCardButton = document.querySelector('.profile__add-button');
const popupButtonList = document.querySelectorAll('.popup__button');
const nameInputElement = document.querySelector('.popup__input_is_name');
const jobInputElement = document.querySelector('.popup__input_is_job');
const avatarInputElement = document.querySelector('.popup__input_avatar');
const avatarEditButton = document.querySelector('.profile__edit-avatar');
const buttonDeliteСonfirmation = document.querySelector('.popup__submit-delete');