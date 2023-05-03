import axios from "axios";

export default class AuthService {
    getUser(...params) {
        return axios({
            method: 'post',
            url: 'http://localhost:4242/api/login',
            data: {
              email: params[0],
              password: params[1]
            }
          });
    }
    }