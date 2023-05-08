import React from 'react';
import ToastService from '../../services/toast.service';
import { Navigate } from 'react-router';
import AuthService from '../../services/auth.service';

export default function AuthGuard({ children }) {
  const toastService = new ToastService();
  const authService = new AuthService;
  const authState = JSON.parse(authService.getAuthState());

    if (authState) {
      return children;
    }

  toastService.emit('Sie sind nicht angemeldet.', 'error');
  return <Navigate to='/login' replace={true} />;
}
