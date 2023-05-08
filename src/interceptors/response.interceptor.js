import axios from 'axios';
import { t } from 'i18next';
import ToastService from '../services/toast.service';

export default class ResponseInterceptor {
  toastService = new ToastService();

  setUp() {
    axios.interceptors.response.use((response) => response, (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          window.location.href = '/login';
        } else if (error.response.status > 401 || error.response.status < 500) {
          this.toastService.emit(t('UTILS.CLIENT_SIDE_ERROR'), 'error');
        } else if (error.response.status >= 500) {
          this.toastService.emit(t('UTILS.SERVER_SIDE_ERROR'), 'error');
        }
      }
      throw error;
    });
  }
}
