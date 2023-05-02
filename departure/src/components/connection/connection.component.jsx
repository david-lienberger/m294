import React from 'react';
import './connection.component.scss';
import { Button, Card } from 'react-bootstrap';

export default function ConnectionComponent({ connection, deleteConnection }) {

  return(
    <>
      <Card id='connection-card'>
        <Card.Header>
          Verbindung: {connection.id}
          <Button variant="outline-primary" id='delete-button' onClick={() => {deleteConnection(connection.id)}}>Löschen</Button>{' '}
        </Card.Header>
        <Card.Body>
          <div id="destinations">
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
        </Card.Body>
      </Card>

    </>
  );
}
