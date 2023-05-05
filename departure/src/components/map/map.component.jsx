import React, { useContext } from 'react';
import { PassListContext } from '../connection-details/connection-details.component';

import './map.component.scss';

export function MapComponent() {
  const passList = useContext(PassListContext);
  const xCoordinate = passList[passList.length - 1].station.coordinate.x;
  const yCoordinate = passList[passList.length - 1].station.coordinate.y;

  return (
    <>
      <iframe id='map' src={`https://www.openstreetmap.org/export/embed.html?bbox=${yCoordinate}%2C${xCoordinate}`} />
    </>
  );
}
