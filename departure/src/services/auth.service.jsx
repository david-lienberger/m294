import axios from 'axios';
import DashboardPage from '../pages/dashboard/dashboard.page';
import React from 'react';
import ReactDOM from 'react-dom/client'

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
      const token = response.data.token;
      if(token != null){
        console.log(token);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        const element = <DashboardPage/>;
        root.render(element);
      }
      return token;
    });
  }
}
