import { Alert } from 'react-bootstrap';
import React  from 'react';
import './error.component.scss';

export default function Error({ message }) {
  return (
    <>
      <Alert className='Error'  variant={'danger'}>
        {message}
      </Alert>
    </>
  );
}
