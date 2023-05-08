import axios from 'axios';
import AuthService from '../services/auth.service';

export default class RequestInterceptor {
  authService = new AuthService();

  setUp() {
    const accessToken = JSON.parse(this.authService.getAccessToken());
    axios.interceptors.request.use((request) => {
      if (request.url.includes('localhost')) {
        request.headers = {
          'x-access-token': accessToken,
        };
      }
      return request;
    });
  }
}
