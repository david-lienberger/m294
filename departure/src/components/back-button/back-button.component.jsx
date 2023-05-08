import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BackButtonComponent() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Button variant="primary" id="back-button" onClick={() => { navigate(-1); }}>
      {t('UTILS.NAVIGATE_BACK')}
    </Button>
  );
}
