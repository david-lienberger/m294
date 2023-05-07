import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './back-button.component.scss';

export default function BackButtonComponent() {
  const navigate = useNavigate();

  return (
    <>
      <Button variant='primary' id='back-button' onClick={() => {navigate(-1)}}>
        Zurück
      </Button>
    </>
  );
}
