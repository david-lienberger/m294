import React from 'react';

import NotFoundPage from '../../pages/not-found/not-found.page';
import ToastService from '../../services/toast.service';

export default function AuthGuard({auth, children}) {
  const toastService = new ToastService();

  if (!auth.isAuthenticated) {
    toastService.emitToastSuccess("Sie sind nicht angemeldet.", 'error');
    return (<NotFoundPage />);
  }

  return children;
}
