import '../pages/index.css';
import {
  openPopupProfileButton,
  cardContainer,
  openPopupAddCardButton,
  nameInputElement,
  aboutInputElement
} from '../utils/constants.js'
import { Card } from '../components/Card.js';
import Section from '../components/Section.js'
import {
  initialCards,
  validationConfig
} from '../components/settings.js'
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

//отрисовываем элементы
const section = new Section ({
  items: initialCards,
  renderer: renderCard
}, '.elements');

section.renderInitialItems();

//Функция добавляет карточку
function renderCard({name, link}) {
  const card = createCard(name, link)
  cardContainer.prepend(card.generateCard());
}
//Функция создает карточку
function createCard(name, link) {
  return new Card(name, link, '#element-template', elementClickHandler);
}

//================= Popup большой картинки ============================
//попап с картинкой
const popupWithImage = new PopupWithImage('.popup_big-size-image')
popupWithImage.setEventListeners()

//функция открытия попапа с картинкой
function elementClickHandler() {
  popupWithImage.open(this._name, this._link);
}

//================= Popup профиля ============================

//информацию о пользователе
const userInfo = new UserInfo({
  userName: '.profile__name',
  userJob: '.profile__description'
});

//Создаем попап редактирования профиля
const popupWithFormEditProfile = new PopupWithForm ('.popup_type_profile-edit', (data) => {
  userInfo.setUserInfo(data);
});

popupWithFormEditProfile.setEventListeners();

// Отправка редактирования профиля
const editProfileFormSubmit = () => {
  const data = userInfo.getUserInfo();
  nameInputElement.value = data.name; 
  aboutInputElement.value = data.about;
  popupWithFormEditProfile.open()
}

//валидация формы редактирования профиля
const validFormProfile = new FormValidator(validationConfig, popupWithFormEditProfile.form)
validFormProfile.enableValidation()

//слушатель клика по кнокпи редактирования профиля
openPopupProfileButton.addEventListener('click', editProfileFormSubmit)

//================= Popup добавления карточки ============================

const popupWithFormCard = new PopupWithForm('.popup_type_add-card',

  ({ item, link }) => {
    const data = {
      name: item,
      link: link
    };
    section.addItem(data)
  });

popupWithFormCard.setEventListeners()

//слушатель клика по кнопке добавления карточки

openPopupAddCardButton.addEventListener('click', () => {
  popupWithFormCard.open();
})

const validFormCard = new FormValidator(validationConfig, popupWithFormCard.form)
validFormCard.enableValidation()