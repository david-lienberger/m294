import React, { useEffect, useState } from 'react';
import './connection.component.scss';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TransportService from '../../services/transport.service';
import moment from 'moment';

export default function ConnectionComponent({ connection, deleteConnection }) {
  const navigate = useNavigate();
  const transportService = new TransportService();
  const [detailedConnection, setDetailedConnection] = useState(undefined);

  useEffect(() => {
    transportService.getConnection(connection.from, connection.to)
      .then((res) => {
        console.log(res.data);
        setDetailedConnection(res.data.connections[0]);
        console.log(detailedConnection);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [connection]);

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
          <div id='card-header'>
            <div id='product-tag'>{detailedConnection ? detailedConnection.products[0] : 'XX'}</div>
            <div id='journey'>
              {
                detailedConnection ? detailedConnection.from.location.name : connection.from
              }
              <span className='material-symbols-outlined'>
                trending_flat
              </span>
              {
                detailedConnection ? detailedConnection.to.location.name : connection.to
              }
            </div>
            <Button variant='outline-primary' id='delete-button' onClick={() => {
              deleteConnection(connection.id);
            }}>
              <span className='material-symbols-outlined'>delete</span>
            </Button>{' '}
          </div>
          <div id='card-content'>
            {detailedConnection &&
              <div id='destinations'>
                <div id='from'>
                  {
                    moment(detailedConnection.from.departure).format('H:mm')
                  }
                </div>
                <div id='to'>
                  {
                    moment(detailedConnection.to.arrival).format('H:mm')
                  }
                </div>

              </div>
            }
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
