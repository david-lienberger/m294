import axios from 'axios';
import ToastService from '../services/toast.service';

export default class ResponseInterceptor {
  toastService = new ToastService();

  setUp() {
    axios.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          window.location.href = '/login';
        } else if (error.response.status > 401 || error.response.status < 500) {
          this.toastService.emit("Es ist ein Client-Fehler aufgetreten.", 'error');
        } else if (error.response.status >= 500) {
          this.toastService.emit("Es ist ein Server-Fehler aufgetreten.", 'error');
        }
      }
      throw error;
    })
  }

}
