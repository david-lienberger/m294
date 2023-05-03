import axios from 'axios';


export default class AuthService {

  getUser(...params) {
    axios({
      method: 'post',
      url: 'http://localhost:4242/api/login',
      data: {
        email: params[0],
        password: params[1],
      },
    }).then(function (response) {
      const token = JSON.stringify(response.data.token);
      console.log(token);
      return token;
    });
  }
  getToken() {
    return ;
  }
}
