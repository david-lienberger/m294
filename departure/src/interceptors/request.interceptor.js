import axios from 'axios';
import AuthService from '../services/auth.service';

export default class RequestInterceptor {
  authService = new AuthService();

  setUp() {
    axios.interceptors.request.use((request) => {
      const accessToken = JSON.parse(this.authService.getAccessToken());
      if (request.url.includes('localhost')) {
        request.headers = {
          'x-access-token': accessToken,
        };
      }
      return request;
    });
  }
}
