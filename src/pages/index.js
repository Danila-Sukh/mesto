import './index.css';

import {
  openPopupProfileButton,
  openPopupAddCardButton,
  nameInputElement,
  jobInputElement,
  avatarInputElement,
  avatarEditButton,
  saveButtonCardAdd,
  saveButtonProfile,
  saveButtonAvatar,
  buttonDeliteСonfirmation

} from '../utils/constants.js'

//Импорт создания карточки
import { Card } from '../components/Card.js';
import Section from '../components/Section.js'
import {
  popupWithFormCardConfig,
  validationConfig,
  removeCardPopupConfig,
  popupWithFormAvatarConfig,
  popupWithFormProfileConfig
} from '../utils/settings.js'
import { renderLoading } from '../utils/renderLoading.js'
//Импорт валидации
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from "../components/Api.js"
import PopupWithConfirmation from "../components/PopupWithConfirmation.js"

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-32/',
  headers: {
    authorization: '638f4b75-d8c0-495f-8684-1a98d470fefa',
    'Content-Type': 'application/json'
  }
})
let userId = null
//информацию о пользователе
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
});

//Загрузка имени и карточек с сервера

api.getAppInfo()
  .then(([userData, getInitialCards]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar
    })
    userId = userData._id
    cardsList.renderInitialItems(getInitialCards);
  })
  .catch(err => console.log(`Ошибка загрузки инициирующих данных: ${err}`))

//редактирование профиля
const popupWithFormEditProfile = new PopupWithForm(popupWithFormProfileConfig.popupSelector,
  {
    submitForm: (data) => {
      renderLoading(saveButtonProfile, 'Сохранение...')
      api.editUserInfo({
        name: data.name,
        about: data.about
      })
        .then((info) => {
          userInfo.setUserInfo({
            name: info.name,
            about: info.about
          })
          popupWithFormEditProfile.close();
        })
        .catch((err) => {
          console.log(`Ошибка при обновлении информации о пользователе: ${err}`);
        })
        .finally(() => {
          renderLoading(saveButtonProfile, 'Сохранить')
        });
    }
  });


popupWithFormEditProfile.setEventListeners();

// Отправка формы редактирования профиля
const popupProfileOpenButton = () => {
  popupProfileOpenButton
  const data = userInfo.getUserInfo()
  validFormProfile.resetValidation();
  nameInputElement.value = data.name;
  jobInputElement.value = data.about;
  popupWithFormEditProfile.open()
}

//валидация формы профиля
const validFormProfile = new FormValidator(validationConfig, popupWithFormEditProfile.form)
validFormProfile.enableValidation()

//слушатель клика по кнопке редактирования профиля
openPopupProfileButton.addEventListener('click', popupProfileOpenButton)

//Экземпляр формы аватара
const popupWithFormAvatar = new PopupWithForm(popupWithFormAvatarConfig.popupSelector, {
  submitForm: (data) => {
    renderLoading(saveButtonAvatar, 'Сохранение...')
    api.editAvatar(data.avatar)
      .then((info) => {
        userInfo.setUserInfo({
          avatar: info.avatar,
        });
        popupWithFormAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка при обновлении информации о пользователе: ${err}`);
      })
      .finally(() => {
        renderLoading(saveButtonAvatar, 'Сохранить')
      });
  }
});
popupWithFormAvatar.setEventListeners();

// Отправка формы аватара
const openAvatarPopup = () => {
  const data = userInfo.getUserInfo()
  validFormAvatar.resetValidation();
  popupWithFormAvatar.open()
}

//валидация формы редактирования аватара
const validFormAvatar = new FormValidator(validationConfig, popupWithFormAvatar.form)
validFormAvatar.enableValidation()

//слушатель клика по кнопке редактирования аватара

avatarEditButton.addEventListener('click', openAvatarPopup)


// ======================  Новая карточка  ===============================

const popupWithFormCard = new PopupWithForm(popupWithFormCardConfig.popupSelector, {
  submitForm: (data) => {
    renderLoading(saveButtonCardAdd, 'Сохранение...')
    api.addPlaceCard(data)
      .then(data => {
        cardsList.addItem(createCard(data))
        popupWithFormCard.close()
      })
      .catch(err => console.log(`Не удалось сохранить карточку: ${err}`))
      .finally(() => {
        renderLoading(saveButtonCardAdd, 'Сохранить')
      })
  }
})
popupWithFormCard.setEventListeners();

// //слушатель клика по кнопке добавления карточки
openPopupAddCardButton.addEventListener('click', () => {
  validFormCard.resetValidation();
  popupWithFormCard.open();
})

// //валидация формы редактирования карточки
const validFormCard = new FormValidator(validationConfig, popupWithFormCard.form)
validFormCard.enableValidation()

// отрисовка карточки
const cardsList = new Section({
  containerSelector: '.elements',
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsList.addItem(cardElement);
  }
});

//Функция создает карточку по шаблону
function createCard(data) {
  const cardObj = new Card({
    data,
    currentUserId: userId,
    cardSelector: '#element-template',
    handleLike: (card) => {
      api
        .updateCardLike(card.getId(), !card.isLiked())
        .then(data => card.setLikes(data.likes))
        .catch(err => console.log(`Не удалось изменить состояние лайка карточки: ${err}`))
    },
    handleRemove: (card) => {
      removeCardPopup.open()
      removeCardPopup.setSubmitHandler(() => {
        renderLoading(buttonDeliteСonfirmation, 'Удаление...')
        api
          .deletePlaceCard(card.getId())
          .then(() => {
            card.deleteCard()
            removeCardPopup.close()
          })
          .catch(err => console.log(`Не удалось удалить карточку: ${err}`))
          .finally(() => {
            renderLoading(buttonDeliteСonfirmation, 'Да')
          })
      })
    },
    elementClickHandler: () => {
      popupWithImage.open(data.name, data.link);
    }
  })

  return cardObj.generateCard();
}

//================= большой картинки ============================

//создаём попап с картинкой
const popupWithImage = new PopupWithImage('.popup_big-size-image')
popupWithImage.setEventListeners()

//================= подтверждения удаления карточки ============================

const removeCardPopup = new PopupWithConfirmation(removeCardPopupConfig)
removeCardPopup.setEventListeners()
