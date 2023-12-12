export class AuthToken {
  constructor(token) {
    this.token = token;
  }
  static getAuthToken() {
    return window.localStorage.getItem("token");//obtiene el token
  }
  static clearAuthToken ()  {
   window.localStorage.removeItem('token'); // Elimina el token del localStorage
  }
}
