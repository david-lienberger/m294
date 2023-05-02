import React from 'react';
import './connection.component.scss';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ConnectionComponent({ connection, deleteConnection }) {
  const navigate = useNavigate();

  function navigateToDetail(event) {
    // To prevent that the app navigates if the delete-button gets clicked
    if (event.target.tagName.toString() === 'DIV') {
      navigate(`/connection?from=${connection.from}&to=${connection.to}`);
    }
  }

  return (
    <>
      <Card id='connection-card' onClick={(event) => {
        navigateToDetail(event);
      }}>
        <Card.Body>
          <Button variant='outline-primary' id='delete-button' onClick={() => {
            deleteConnection(connection.id);
          }}>
            <span className='material-symbols-outlined'>delete</span>
          </Button>{' '}
          <div id='journey-content'>
            <div id='destinations'>
              <div id='from'>
                {connection.from}
              </div>
              <div id='to'>
                {connection.to}
              </div>
            </div>
            <div id='line'>
              <div className='dot'></div>
              <div id='connection-line'></div>
              <div className='dot'></div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
