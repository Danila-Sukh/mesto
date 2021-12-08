export default class UserInfo {
  constructor({ userName, userJob }) {
      this._userName = document.querySelector(userName);
      this._userJob = document.querySelector(userJob);
  }


  getUserInfo() {
      const dataUser = {};
      dataUser.name = this._userName.textContent;
      dataUser.about = this._userJob.textContent;
      return dataUser;
  }


  setUserInfo({ name, about }) {
      this._userName.textContent = name;
      this._userJob.textContent = about;
  }
}
