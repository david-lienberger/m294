import React, { useEffect } from 'react';
import ToastService from '../../services/toast.service';
import LoginPage from '../../pages/login/login.page';

export default function AuthGuard({auth, children}) {

  useEffect(() => {
  }, [auth])
  const toastService = new ToastService();

  if (!auth.isAuthenticated) {
    toastService.emit("Sie sind nicht angemeldet.", 'error');
    return (<LoginPage />);
  }

  return children;
}
