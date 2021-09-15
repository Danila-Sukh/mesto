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
const hearts = document.querySelectorAll('.card__like-button');
const cardContainer = document.querySelector('.elements');
const popupBigSizeImg = document.querySelector('.popup_big-size-image');
const popupOpenBigImg = document.querySelector('.card__image');
const popupCloseBigImg = document.querySelector('.popup__close_type_big-image');
const popupBigImg = document.querySelector('.popup__big-img');
const popupNameBigImg = document.querySelector('.popup__name-big-img');
const image = document.querySelector('.popup__input_card_link'); 
const name = document.querySelector('.popup__input_card_name'); 
const popup = document.querySelector('.popup'); 

function openPopup(popup) {
  popup.classList.add('popup__opened');
}

function openPofilePopup() { 
  openPopup(popupProfile); 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup__opened');
}

function closePofilePopup() {
  closePopup(popupProfile);
}

//открытие и закрытие попапа картинки

function openPopupBigImg () {
  popupBigSizeImg.classList.add('popup__opened');
}

function closePopupBigImg () {
  popupBigSizeImg.classList.remove('popup__opened');
}

//обработчик клика для карточки

function clickHandler(event) {
  const imgSrc = event.target.src;
  const nameImg = event.target.parentNode.textContent
  openPopupBigImg();
  popupBigImg.src = imgSrc;
  popupNameBigImg.textContent = nameImg;
}

// Постановка лайков
 function heartFillToggle(event) {
  event.target.classList.toggle('card__like-button_fill');

  for (let i = 0; i <hearts.length; i++) {
  hearts[i].addEventListener('click', heartFillToggle);
}
}

// Попапа редактирования профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePofilePopup();
}

//создание карточки
function createCard(imageValue, nameValue) {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = imageValue;
  cardElement.querySelector('.card__title').textContent = nameValue;
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_fill');
  });
  cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  cardImage.addEventListener('click', clickHandler)
  return cardElement;

}


// Добавление карточки
function addCard (imageValue, nameValue) {
  cardContainer.prepend( createCard(imageValue, nameValue) );
}

// Попапа формы добавления карточки
function formSubmitCard(evt) { 
  evt.preventDefault(); 
  addCard(image.value, name.value);
  name.value = ''; 
  image.value = '';  
  closePopup(popupAddCard);
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
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = card.link;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_fill');
  });
  cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  cardImage.addEventListener('click', clickHandler)
  cardContainer.prepend(cardElement);
});

openPopupButton.addEventListener('click', openPofilePopup);
closePopupButton.addEventListener('click', closePofilePopup);
popupProfile.addEventListener('submit', formSubmitHandler);
formElementAddCard.addEventListener('submit', formSubmitCard);
popupCloseBigImg.addEventListener('click', closePopupBigImg);
openPopupAddCardButton.addEventListener('click', () => openPopup(popupAddCard));
closePopupAddCardButton.addEventListener('click', () => closePopup(popupAddCard));
