let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup__form');
let closePopupButton = document.querySelector('.popup__close');
let nameInput = formElement.querySelector('.popup__input_is_name');
let jobInput = formElement.querySelector('.popup__input_is_job');
let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__description')

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

function openPopup() {       
  popup.classList.add('popup_opened');  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {     
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);     
closePopupButton.addEventListener('click', closePopup);  
formElement.addEventListener('submit', formSubmitHandler);