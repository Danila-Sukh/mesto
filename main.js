(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".popup__button_invalid"),n=document.querySelector(".popup__button-profile"),r=document.querySelector(".popup__button_save_avatar"),o=(document.querySelector(".elements"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup_type_profile-edit"),document.querySelector(".profile__add-button")),i=(document.querySelectorAll(".popup__button"),document.querySelector(".popup__input_is_name")),a=document.querySelector(".popup__input_is_job"),u=(document.querySelector(".popup__input_avatar"),document.querySelector(".profile__edit-avatar")),c=document.querySelector(".popup__submit-delete");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n=t.data,r=t.currentUserId,o=t.cardSelector,i=t.handleLike,a=t.handleRemove,u=t.elementClickHandler;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=n._id,this._name=n.name,this._link=n.link,this._likes=n.likes,this._ownerId=n.owner._id,this._currentUserId=r,this._cardSelector=document.querySelector(o),this._handleLike=i,this._handleRemove=a,this._elementClickHandler=u,this._cardLikesCount=n.likes.length}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._cardSelector.content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".card__image");return e.src=this._link,e.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._element.querySelector(".element__delete").classList.add(this._currentUserId===this._ownerId?"element__delete_active":"element__delete_hidden"),this._likeButtonElement=this._element.querySelector(".card__like-button"),this._cardLikesCount=document.querySelector(".element__likes-count"),this._updateLikes(),this._setEventListeners(),this._element}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._currentUserId})))}},{key:"setLikes",value:function(e){this._likes=e,this._updateLikes()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._id}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__like-button").addEventListener("click",(function(){e._updateLikes()})),this._element.querySelector(".card__image").addEventListener("click",this._elementClickHandler.bind(this)),this._likeButtonElement.addEventListener("click",(function(){return e._handleLike(e)})),this._element.querySelector(".element__delete").addEventListener("click",(function(){return e._handleRemove(e)}))}},{key:"_updateLikes",value:function(){this._element.querySelector(".element__likes-count").textContent=this._likes.length,this.isLiked()?this._likeButtonElement.classList.add("card__like-button_fill"):this._likeButtonElement.classList.remove("card__like-button_fill")}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=t.containerSelector,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerElement=document.querySelector(n),this._renderer=r.bind(this)}var t,n;return t=e,(n=[{key:"renderInitialItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._containerElement.prepend(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_invalid",inputErrorClass:"popup__field_type_error",errorClass:"error_visible"},h=function(e,t){e.textContent=t};function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._validationConfig.inputErrorClass),this._errorElement.innerText=t,this._errorElement.classList.add(this._validationConfig.errorClass)}},{key:"hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._validationConfig.inputErrorClass),this._errorElement.classList.remove(this._validationConfig.errorClass),this._errorElement.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this.hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!1))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e.hideInputError(t)})),this.toggleButtonState()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeEscHandle=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup__opened"),document.addEventListener("keydown",this._closeEscHandle)}},{key:"close",value:function(){this._popup.classList.remove("popup__opened"),document.removeEventListener("keydown",this._closeEscHandle)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._bigImageSelector=".popup__big-img",t._image=t._popup.querySelector(t._bigImageSelector),t._bigImageTitlelSelector=".popup__name-big-img",t._imageTitle=t._popup.querySelector(t._bigImageTitlelSelector),t}return t=a,(n=[{key:"open",value:function(e,t){k(O(a.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._imageTitle.textContent=e}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n.form=n._popup.querySelector(".popup__form"),n._formInputs=Array.from(n.form.querySelectorAll(".popup__input")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._formInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;I(T(a.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){I(T(a.prototype),"close",this).call(this),this.form.reset()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector,i=t._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userAbout=document.querySelector(r),this._userAvatar=document.querySelector(o),this._id=i}var t,n;return t=e,(n=[{key:"getId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userAbout.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;t&&(this._userName.textContent=t),n&&(this._userAbout.textContent=n),r&&(this._userAvatar.src=r),o&&(this._id=o)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addPlaceCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deletePlaceCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateCardLike",value:function(e,t){return this._set("cards/likes/".concat(e),t?"PUT":"DELETE")}},{key:"_set",value:function(e,t){return fetch("".concat(this._url).concat(e),{method:t,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function z(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e){var t,n=e.popupSelector,r=e.formSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._formElement=document.querySelector("".concat(n," ").concat(r)),t}return t=a,(n=[{key:"setSubmitHandler",value:function(e){this._submitForm=e}},{key:"setEventListeners",value:function(){var e=this;F(M(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm()}))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=new V({url:"https://mesto.nomoreparties.co/v1/cohort-32/",headers:{authorization:"638f4b75-d8c0-495f-8684-1a98d470fefa","Content-Type":"application/json"}}),Q=null,W=new U({nameSelector:".profile__name",aboutSelector:".profile__description",avatarSelector:".profile__avatar"});K.getAppInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo({name:o.name,about:o.about,avatar:o.avatar}),Q=o._id,re.renderInitialItems(i)})).catch((function(e){return console.log("Ошибка загрузки инициирующих данных: ".concat(e))}));var X=new A(".popup_type_profile-edit",{submitForm:function(e){h(n,"Сохранение..."),K.editUserInfo({name:e.name,about:e.about}).then((function(e){W.setUserInfo({name:e.name,about:e.about}),X.close()})).catch((function(e){console.log("Ошибка при обновлении информации о пользователе: ".concat(e))})).finally((function(){h(n,"Сохранить")}))}});X.setEventListeners();var Y=new y(d,X.form);Y.enableValidation(),e.addEventListener("click",(function(){var e=W.getUserInfo();Y.toggleButtonState(),Y.resetValidation(),i.value=e.name,a.value=e.about,X.open()}));var Z=new A(".popup_avatar",{submitForm:function(e){h(r,"Сохранение..."),K.editAvatar(e.avatar).then((function(e){W.setUserInfo({avatar:e.avatar}),Z.close()})).catch((function(e){console.log("Ошибка при обновлении информации о пользователе: ".concat(e))})).finally((function(){h(r,"Сохранить")}))}});Z.setEventListeners();var ee=new y(d,Z.form);ee.enableValidation(),u.addEventListener("click",(function(){W.getUserInfo(),ee.toggleButtonState(),ee.resetValidation(),Z.open()}));var te=new A(".popup_type_add-card",{submitForm:function(e){h(t,"Сохранение..."),K.addPlaceCard(e).then((function(e){re.addItem(oe(e)),te.close()})).catch((function(e){return console.log("Не удалось сохранить карточку: ".concat(e))})).finally((function(){h(t,"Сохранить")}))}});te.setEventListeners(),o.addEventListener("click",(function(){ne.toggleButtonState(),ne.resetValidation(),te.open()}));var ne=new y(d,te.form);ne.enableValidation();var re=new p({containerSelector:".elements",renderer:function(e){var t=oe(e);re.addItem(t)}});function oe(e){return new s({data:e,currentUserId:Q,cardSelector:"#element-template",handleLike:function(e){K.updateCardLike(e.getId(),!e.isLiked()).then((function(t){return e.setLikes(t.likes)})).catch((function(e){return console.log("Не удалось изменить состояние лайка карточки: ".concat(e))}))},handleRemove:function(e){ae.open(),ae.setSubmitHandler((function(){h(c,"Удаление..."),K.deletePlaceCard(e.getId()).then((function(){e.deleteCard(),ae.close()})).catch((function(e){return console.log("Не удалось удалить карточку: ".concat(e))})).finally((function(){h(c,"Да")}))}))},elementClickHandler:function(){ie.open(e.name,e.link)}}).generateCard()}var ie=new L(".popup_big-size-image");ie.setEventListeners();var ae=new G({popupSelector:".popup_delete-cofirm",formSelector:".popup__form"});ae.setEventListeners()})();