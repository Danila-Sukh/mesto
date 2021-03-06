export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  //получение юзера
  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse)
  }
  //редактирование юзера
  editUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._checkResponse)
  }
  //редактирование аватара
  editAvatar(avatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkResponse)
  }
  //Отрисовка карточки
  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  }
  //добавление карточки
  addPlaceCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._checkResponse)
  }
  //удаление карточки
  deletePlaceCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  //добавление и удаление лайка
  updateCardLike(id, liked) {
    return this._setCards(`cards/likes/${id}`, liked ? 'PUT' : 'DELETE')
  }

  _setCards(query, method) {
    return fetch(`${this._url}${query}`, {
      method,
      headers: this._headers,
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

