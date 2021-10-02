export {
    elementTemplate,
    popupViewerImage,
    popupViewerTitle,
    popupImage,
    openPopup,
    closePopup
};

const elementTemplate = document.querySelector("#element-template").content;
const popupViewerImage = document.querySelector(".popup__big-img");
const popupViewerTitle = document.querySelector(".popup__name-big-img");
const popupImage = document.querySelector(".popup_big-size-image");

function openPopup(popup) {
    popup.classList.add('popup__opened');
    document.addEventListener('keydown', closeByEscape);
    popup.addEventListener('click', closeOnOverlay);
}

function closePopup(popup) {
    popup.classList.remove('popup__opened');
    document.removeEventListener('keydown', closeByEscape);
    popup.removeEventListener('click', closeOnOverlay);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const popupIsOpened = document.querySelector('.popup__opened')
        closePopup(popupIsOpened);
    }
}


function closeOnOverlay(evt) {
    if (evt.target.classList.contains('popup__opened')) {
        closePopup(evt.target)
    }
}