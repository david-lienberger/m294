import React from 'react';

import { t } from 'i18next';
import { RouterProvider } from 'react-router';
import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/login/login.page';
import { router } from '../index';

describe('01 Login', () => {
  render(<RouterProvider router={router}><LoginPage /></RouterProvider>);

  test('Check if email-Label is visible to the user.', async () => {
    expect(screen.findByText(t('LOGIN.EMAIL'))).toBeVisible;
  });

  test('Check if password-Label is visible to the user.', async () => {
    expect(screen.findByText(t('LOGIN.PASSWORD'))).toBeVisible;
  });

  test('Check if submit-button is visible to the user.', async () => {
    expect(screen.findByText(t('LOGIN.SUBMIT'))).not.toBeDisabled;
  });
});
