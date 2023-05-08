import React, { useEffect, useState, useContext } from 'react';

import './information.component.scss';
import { PassListContext } from '../../pages/connection-details/connection-details.component';
import TransportService from '../../services/transport.service';
import { Spinner } from 'react-bootstrap';

export function InformationComponent() {
  const transportService = new TransportService();
  const passList = useContext(PassListContext);
  const xCoordinate = passList[passList.length - 1].station.coordinate.x;
  const yCoordinate = passList[passList.length - 1].station.coordinate.y;
  const [stationInformation, setStationInformation] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    transportService.getStationInformation(xCoordinate, yCoordinate).then((res) => {
      setStationInformation(res.data.records[0].fields);
      setLoading(false);
    })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const rentBicycle = () => {
    if (stationInformation['veloparking_abschliessbar'] && parseInt(stationInformation['veloparking_abschliessbar']) > 0) {
      return (
        <>
          <div className='information-detail-wrapper'>
            <h5>Velos</h5>
            <div className='detail-field'><b>Anzahl Veloparking:</b> {stationInformation['veloparking_abschliessbar']}</div>
            <div className='detail-field'><b>Kapazität Velostation:</b> {stationInformation['veloparking_status_d']}</div>
          </div>
        </>
      );
    }
  }

  const bicycle = () => {
    if (stationInformation['mietvelo_anzahl'] && parseInt(stationInformation['mietvelo_anzahl']) > 0) {
      return (
        <>
          <div className='information-detail-wrapper'>
            <h5>Velos</h5>
            <div className='detail-field'><b>Anzahl Mitevelos:</b> {stationInformation['mietvelo_anzahl']}</div>
            <div className='detail-field'><b>Bemerkung Mitevelos:</b> {stationInformation['mietvelo_bemerkung']}</div>
          </div>
        </>
      );
    }
  }

  const parkAndRail = () => {
    if (stationInformation['parkrail_anzahl']) {
      return (
        <>
          <div className='information-detail-wrapper'>
            <h5>Park and Rail</h5>
            <div className='detail-field'><b>Parkplätze:</b> {stationInformation['parkrail_anzahl']}</div>
            <div className='detail-field'><b>Öffnungszeiten:</b> {stationInformation['parkrail_pflichtig_zeit1']} Uhr
            </div>
            <div className='detail-field'><b>Preis/Tag:</b> {stationInformation['parkrail_preis_tag']} CHF</div>
            <div className='detail-field'><b>Bemerkung:</b> {stationInformation['parkrail_bemerkung']}</div>
          </div>
        </>
      );
    }
  }

  const taxi = () => {
    if (stationInformation['railtaxiinfo']) {
      return (
        <>
          <div className='information-detail-wrapper'>
            <h5>Taxi</h5>
            <div className='detail-field'><b>Info:</b> {stationInformation['railtaxiinfo']}</div>
            <div className='detail-field'><b>Telefon:</b> {stationInformation['railtaxitext']}</div>
          </div>
        </>
      );
    }
  }

  if (loading) {
    return (
      <>
        <div className='information' id='spinner'>
          <Spinner animation='border' role='status' id='search-res-spinner' />
        </div>
      </>
    );
  }

  if (stationInformation) {
    return (
      <>
        <div className='information'>
          <h4>Nützliche Informationen zu Ihrem Reiseziel:</h4>
          {bicycle()}
          {rentBicycle()}
          {parkAndRail()}
          {taxi()}
        </div>
      </>

    );
  }

  return (
    <>
      <div className='information'>
        Leider können Ihnen keine weiteren Informationen angezeigt werden.
      </div>
    </>
  );
}
