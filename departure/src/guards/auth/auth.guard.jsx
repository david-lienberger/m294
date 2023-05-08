import React from 'react';
import { Navigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import ToastService from '../../services/toast.service';
import AuthService from '../../services/auth.service';

export default function AuthGuard({ children }) {
  const toastService = new ToastService();
  const authService = new AuthService();
  const { t } = useTranslation();
  const authState = JSON.parse(authService.getAuthState());

  if (authState) {
    return children;
  }

  toastService.emit(t('UTILS.NOT_SIGNED_IN'), 'error');
  return <Navigate to="/login" replace />;
}
