import React, { createContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './connection-details.component.scss';
import TransportService from '../../services/transport.service';
import { JourneyComponent } from '../../components/journey/journey.component';
import { Button, Placeholder } from 'react-bootstrap';
import { MapComponent } from '../../components/map/map.component';
import { InformationComponent } from '../../components/icons/information.component';

export const PassListContext = createContext(undefined);

export default function ConnectionDetailsComponent() {
  const [searchParams] = useSearchParams();
  const transportService = new TransportService();
  const [detailedConnection, setDetailedConnection] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    transportService.getConnection(from, to)
      .then((res) => {
        setDetailedConnection(res.data.connections[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (detailedConnection) {
    return (
      <>
        <div id='connection-details-wrapper'>
          <div id='connection'>
            <div id='product-tag'>{detailedConnection.products[0]}</div>
            <div className='destination'>{detailedConnection.from.location.name}</div>
            <span className='material-symbols-outlined'>
            trending_flat
          </span>
            <div className='destination'>{detailedConnection.to.location.name}</div>
          </div>
          <div id='details-content'>
            <div id='journey-wrapper'>
              <PassListContext.Provider value={detailedConnection.sections[0].journey.passList}>
                <JourneyComponent />
              </PassListContext.Provider>
              <Button variant='primary' id='back-button' onClick={() => {navigate(-1)}}>
                Zurück
              </Button>
            </div>
            <div id='map-information-wrapper'>
              <PassListContext.Provider value={detailedConnection.sections[0].journey.passList}>
                <MapComponent />
                <InformationComponent />
              </PassListContext.Provider>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div id='connection-details-wrapper'>
        <Placeholder animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={2} /> <Placeholder xs={2} />
        </Placeholder>
        <p />
        <Placeholder style={{display: 'block'}} animation='wave'>
          <Placeholder style={{height: '15rem', opacity: '0.3'}} xs={2} />
        </Placeholder>
      </div>
    </>
  );
}