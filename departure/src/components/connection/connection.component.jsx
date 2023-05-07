import React, { useEffect, useState } from 'react';
import './connection.component.scss';
import { Button, Card, Placeholder } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import TransportService from '../../services/transport.service';

export default function ConnectionComponent({ connection, deleteConnection, saveConnection }) {
  const navigate = useNavigate();
  const transportService = new TransportService();
  const [detailedConnection, setDetailedConnection] = useState(undefined);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if ('products' in connection) {
      setDetailedConnection(connection);
    } else {
      transportService.getConnection(connection.from.location.name, connection.to.location.name)
      .then((res) => {
        setDetailedConnection(res.data.connections[0]);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }, []);

  function performActionButton() {
    // If not on search-result-page
    if (!searchParams.size > 0) {
      deleteConnection(connection.id);
    } else {
      console.log('save');
      const from = connection.from.location.name;
      const to = connection.to.location.name;
      saveConnection(from, to);
    }
  }

  function navigateToDetail(event) {
    // To prevent that the app navigates if the delete-button gets clicked
    if (event.target.tagName.toString() === 'DIV') {
      navigate(`/connection?from=${detailedConnection.from.location.name}&to=${detailedConnection.to.location.name}`);
    }
  }

  if (detailedConnection) {
    return (
      <>
        <Card id='connection-card' onClick={(event) => {
          navigateToDetail(event);
        }}>
          <Card.Body>
            <div id='card-header'>
              <div id='product-tag'>{detailedConnection.products[0]}</div>
              <div id='journey'>
                {detailedConnection.from.location.name}
                <span className='material-symbols-outlined'>
                trending_flat
              </span>
                {detailedConnection.to.location.name}
              </div>
              <Button variant='secondary' id='action-button' onClick={() => {
                performActionButton();
              }}>
                {
                  searchParams.size > 0 ? <span className='material-symbols-outlined'>add</span> : <span className='material-symbols-outlined'>delete</span>
                }

              </Button>
            </div>
            <div id='card-content'>
              <div id='destinations'>
                <div id='from'>
                  {
                    moment(detailedConnection.from.departure).format('H:mm')
                  }
                  <span id='delay'>
                    {detailedConnection.from.delay > 0 &&
                      `+ ${detailedConnection.from.delay}min`
                    }
                  </span>
                </div>
                <div id='to'>
                  {
                    moment(detailedConnection.to.arrival).format('H:mm')
                  }
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

  //Render Placeholder
  return (
    <Card id='connection-card'>
      <Card.Body>
        <Placeholder as={Card.Title} animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={5} /> <Placeholder style={{ float: 'right' }} xs={1} />
        </Placeholder>
        <Placeholder as={Card.Body} animation='wave'>
          <Placeholder xs={3} /> <Placeholder xs={3} />
          <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );

}
