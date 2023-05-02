import axios from "axios";

export default class AuthService {
    getUser({email, password}) {
        return axios({
            method: 'post',
            url: 'http://localhost:4242/api/login',
            data: {
              email: {email},
              password: {password}
            }
          });
    }
    }