import { toast } from 'react-toastify';

export default class ToastService {
  emit(message, type) {
    toast(message, {
      type,
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      pauseOnFocusLoss: false,
      progress: undefined,
      theme: 'light',
    });
  }
}
