import { Alert } from 'react-bootstrap';
import React  from 'react';

export default function Error({ message }) {
  return (
    <>
      <Alert style={{ width: '10rem', margin: '1rem' }} variant={'danger'}>
        {message}
      </Alert>
    </>
  );
}
