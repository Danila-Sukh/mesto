let openPopupButton = document.querySelector('.profile__edit-button');
let openPopupAddCardButton = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let popupAddCard = document.querySelector('.popup_type_add-card');
let closePopupButton = document.querySelector('.popup__close');
let closePopupAddCardButton = document.querySelector('.popup__close_type_add-card');
let formElement = document.querySelector('.popup_type_profile-edit')
let formElementAddCard = document.querySelector('.popup__form_type_add-card')
let nameInput = formElement.querySelector('.popup__input_is_name');
let jobInput = formElement.querySelector('.popup__input_is_job');
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__description')
let hearts = document.querySelectorAll('.card__like-button');
const cardContainer = document.querySelector('.elements');
let popupBigImg = document.querySelector('.popup_big-size-image');
let popupOpenBigImg = document.querySelector('.card__image');
let popupCloseBigImg = document.querySelector('.popup__close_type_big-image');

// Открытие и закрытие попапа профиля
function openPofilePopup () {
  popup.classList.add('popup__opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePofilePopup () {
  popup.classList.remove('popup__opened');
}

// Открытие и закрытие попапа добавление карточек

function openAddCardPopup () {
  popupAddCard.classList.add('popup__opened');
}

function closeAddCardPopup () {
  popupAddCard.classList.remove('popup__opened');
}

//открытие и закрытие попапа картинки

function openPopupBigImg () {
  popupBigImg.classList.add('popup__opened');
}

function closePopupBigImg () {
  popupBigImg.classList.remove('popup__opened');
}

//обработчик клика для карточки
function elementClickHandler(event) {
  const imgSrc = event.target.src;
  const NameImg = event.target.parentNode.textContent
  openPopupBigImg();
  document.querySelector('.popup__big-img').src = imgSrc;
  document.querySelector('.popup__name-big-img').textContent = NameImg;
}

// Постановка лайков
function heartFillToggle(event) {
    event.target.classList.toggle('card__like-button_fill');
  }

 for (let i = 0; i <hearts.length; i++) {
   hearts[i].addEventListener('click', heartFillToggle);
 }


// Попапа редактирования профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePofilePopup();
}

// Добавление карточки
function addCard (imageValue, nameValue) {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = imageValue;
  cardElement.querySelector('.card__title').textContent = nameValue;
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_fill');
  });
  cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });


  cardElement.querySelector('.card__image').addEventListener('click', elementClickHandler)



  cardContainer.prepend(cardElement);
}
// Попапа формы добавления карточки
function formSubmitCard(evt) {
  evt.preventDefault();
  const image = document.querySelector('.popup__input_type_card_link');
  const name = document.querySelector('.popup__input_type_card_name');
  addCard(image.value, name.value);
  image.value = '';
  name.value = '';
  closeAddCardPopup ();
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
initialCards.forEach((card) => {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_fill');
  });
  cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', elementClickHandler)
  cardContainer.prepend(cardElement);
});

openPopupButton.addEventListener('click', openPofilePopup);
closePopupButton.addEventListener('click', closePofilePopup);
openPopupAddCardButton.addEventListener('click', openAddCardPopup);
closePopupAddCardButton.addEventListener('click', closeAddCardPopup);
formElement.addEventListener('submit', formSubmitHandler);
formElementAddCard.addEventListener('submit', formSubmitCard);
popupCloseBigImg.addEventListener('click', closePopupBigImg);
