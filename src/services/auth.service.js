import axios from 'axios';

export default class AuthService {
  async getUser(...params) {
    try {
      let token;
      await axios({
        method: 'post',
        url: 'http://localhost:4242/api/login',
        data: {
          email: params[0],
          password: params[1],
        },
      }).then((response) => {
        token = JSON.stringify(response.data.token);
      });
      return token;
    } catch (error) {
      return 'Error';
    }
  }

  saveAccessToken(token) {
    sessionStorage.setItem('token', token);
  }

  getAccessToken() {
    return sessionStorage.getItem('token');
  }

  saveAuthState(state) {
    sessionStorage.setItem('isAuthenticated', state);
  }

  getAuthState() {
    return sessionStorage.getItem('isAuthenticated');
  }
}
