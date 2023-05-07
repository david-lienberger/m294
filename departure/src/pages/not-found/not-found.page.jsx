import React from 'react';
import BackButtonComponent from '../../components/back-button/back-button.component';
import './not-found.page.scss';

export default function NotFoundPage() {
  return (
    <>
    <div id='not-found-wrapper'>
      <h1>404 Error.</h1>
      <h4>Die angefragte Seite wurde nicht gefunden.</h4>
      <BackButtonComponent />
    </div>
    </>
  );
}
