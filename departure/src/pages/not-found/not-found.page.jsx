import React from 'react';
import BackButtonComponent from '../../components/back-button/back-button.component';
import './not-found.page.scss';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const {t} = useTranslation();
  return (
    <>
    <div id='not-found-wrapper'>
      <h1>{t('NOT_FOUND.HEADING')}</h1>
      <h4>{t('NOT_FOUND.DESCRIPTION')}</h4>
      <div id='back-button-not-found'>
        <BackButtonComponent />
      </div>
    </div>
    </>
  );
}
