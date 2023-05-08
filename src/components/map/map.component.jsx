import React, { useContext } from 'react';
import { PassListContext } from '../../pages/connection-details/connection-details.component';

import './map.component.scss';

export default function MapComponent() {
  const passList = useContext(PassListContext);
  const xCoordinate = passList[passList.length - 1].station.coordinate.x;
  const yCoordinate = passList[passList.length - 1].station.coordinate.y;

  return (
    <iframe title="map" id="map" src={`https://www.openstreetmap.org/export/embed.html?bbox=${yCoordinate}%2C${xCoordinate}`} />
  );
}
