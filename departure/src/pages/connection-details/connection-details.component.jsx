import React, { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './connection-details.component.scss';
import {
  Button, OverlayTrigger, Placeholder, Tooltip,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import TransportService from '../../services/transport.service';
import JourneyComponent from '../../components/journey/journey.component';
import MapComponent from '../../components/map/map.component';
import InformationComponent from '../../components/information/information.component';
import BackButtonComponent from '../../components/back-button/back-button.component';
import ToastService from '../../services/toast.service';
import ConnectionsService from '../../services/connections.service';

export const PassListContext = createContext(undefined);

export default function ConnectionDetailsComponent() {
  const [searchParams] = useSearchParams();
  const transportService = new TransportService();
  const toastService = new ToastService();
  const connectionsService = new ConnectionsService();
  const [detailedConnection, setDetailedConnection] = useState(undefined);
  const [connectionSaved, setConnectionSaved] = useState(false);
  const [lastAction, setLastAction] = useState(new Date());
  const TIME_TO_WAIT = -5000;
  const { t } = useTranslation();

  useEffect(() => {
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const departureTime = searchParams.get('departureTime');
    transportService.getConnectionByTime(from, to, departureTime)
      .then((res) => {
        setDetailedConnection(res.data.connections[0]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  function save() {
    if (lastAction - new Date() < TIME_TO_WAIT) {
      setConnectionSaved(!connectionSaved);
      if (connectionSaved) {
        toastService.emit(t('UTILS.CONNECTION_REMOVED'), 'success');
        // If the provided departure-fuek-API would return the ID of the created object, you could handle this.
      } else {
        connectionsService.addConnection(detailedConnection.from.location.name, detailedConnection.to.location.name).then((res) => {
          toastService.emit(t('UTILS.CONNECTION_SAVED'), 'success');
          return res;
        });
      }
      setLastAction(new Date());
    } else {
      toastService.emit(t('UTILS.WAIT_WITH_ACTION'), 'warning');
    }
  }

  if (detailedConnection) {
    return (
      <div id="connection-details-wrapper">
        <div id="connection">
          <div id="product-tag">{detailedConnection.products[0]}</div>
          <div className="destination">{detailedConnection.from.location.name}</div>
          <span className="material-symbols-outlined">
            trending_flat
          </span>
          <div className="destination">{detailedConnection.to.location.name}</div>
          <div id="save-button-wrapper">
            <OverlayTrigger overlay={<Tooltip>{connectionSaved ? t('UTILS.REMOVE_CONNECTION') : t('UTILS.SAVE_CONNECTION')}</Tooltip>} trigger={['focus', 'hover']} placement="right">
              <Button variant="primary" onClick={() => save()}>
                {
                  connectionSaved
                    ? <span id="add-icon" className="material-symbols-outlined">done</span> : <span id="done-icon" className="material-symbols-outlined">add</span>
                }
              </Button>
            </OverlayTrigger>
          </div>
        </div>
        <div id="details-content">
          <div id="journey-wrapper">
            <PassListContext.Provider value={detailedConnection.sections[0].journey.passList}>
              <JourneyComponent />
            </PassListContext.Provider>
            <div id="back-button-connection-details">
              <BackButtonComponent />
            </div>
          </div>
          <div id="map-information-wrapper">
            <PassListContext.Provider value={detailedConnection.sections[0].journey.passList}>
              <MapComponent />
              <InformationComponent />
            </PassListContext.Provider>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="connection-details-wrapper">
      <Placeholder animation="wave">
        <Placeholder xs={1} />
        {' '}
        <Placeholder xs={2} />
        {' '}
        <Placeholder xs={2} />
      </Placeholder>
      <p />
      <Placeholder style={{ display: 'block' }} animation="wave">
        <Placeholder style={{ height: '15rem', opacity: '0.3' }} xs={2} />
      </Placeholder>
    </div>
  );
}
