import React, { useContext, useEffect, useState } from 'react';

import './information.component.scss';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { PassListContext } from '../../pages/connection-details/connection-details.component';
import TransportService from '../../services/transport.service';

export default function InformationComponent() {
  const transportService = new TransportService();
  const passList = useContext(PassListContext);
  const xCoordinate = passList[passList.length - 1].station.coordinate.x;
  const yCoordinate = passList[passList.length - 1].station.coordinate.y;
  const [stationInformation, setStationInformation] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    transportService.getStationInformation(xCoordinate, yCoordinate).then((res) => {
      setStationInformation(res.data.records[0].fields);
      setLoading(false);
    })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  }, []);

  const rentBicycle = () => {
    if (stationInformation.veloparking_abschliessbar && parseInt(stationInformation.veloparking_abschliessbar, 10) > 0) {
      return (
        <div className="information-detail-wrapper">
          <h5>{t('INFORMATION.BICYCLES.HEADING')}</h5>
          <div className="detail-field">
            <b>{t('INFORMATION.BICYCLES.AMOUNT_PARKING')}</b>
            {' '}
            {stationInformation.veloparking_abschliessbar}
          </div>
          <div className="detail-field">
            <b>{t('INFORMATION.BICYCLES.CAPACITY_PARKING')}</b>
            {' '}
            {stationInformation.veloparking_status_d}
          </div>
        </div>
      );
    }
  };

  const bicycle = () => {
    if (stationInformation.mietvelo_anzahl && parseInt(stationInformation.mietvelo_anzahl, 10) > 0) {
      return (
        <div className="information-detail-wrapper">
          <h5>{t('INFORMATION.BICYCLES.HEADING')}</h5>
          <div className="detail-field">
            <b>{t('INFORMATION.BICYCLES.AMOUNT_RENT')}</b>
            {' '}
            {stationInformation.mietvelo_anzahl}
          </div>
          <div className="detail-field">
            <b>{t('INFORMATION.BICYCLES.COMMENT_RENT')}</b>
            {' '}
            {stationInformation.mietvelo_bemerkung}
          </div>
        </div>
      );
    }
  };

  const parkAndRail = () => {
    if (stationInformation.parkrail_anzahl) {
      return (
        <div className="information-detail-wrapper">
          <h5>{t('INFORMATION.PARK_AND_RAIL.HEADING')}</h5>
          <div className="detail-field">
            <b>{t('INFORMATION.PARK_AND_RAIL.CAPACITY')}</b>
            {' '}
            {stationInformation.parkrail_anzahl}
          </div>
          <div className="detail-field">
            <b>{t('INFORMATION.PARK_AND_RAIL.OPENING_HOURS')}</b>
            {' '}
            {stationInformation.parkrail_pflichtig_zeit1}
            {' '}
            Uhr
          </div>
          <div className="detail-field">
            <b>{t('INFORMATION.PARK_AND_RAIL.PRICE_PER_DAY')}</b>
            {' '}
            {stationInformation.parkrail_preis_tag}
            {' '}
            CHF
          </div>
          <div className="detail-field">
            <b>{t('INFORMATION.PARK_AND_RAIL.COMMENT')}</b>
            {' '}
            {stationInformation.parkrail_bemerkung}
          </div>
        </div>
      );
    }
  };

  const taxi = () => {
    if (stationInformation.railtaxiinfo) {
      return (
        <div className="information-detail-wrapper">
          <h5>{t('INFORMATION.TAXI.HEADING')}</h5>
          <div className="detail-field">
            <b>{t('INFORMATION.TAXI.INFO')}</b>
            {' '}
            {stationInformation.railtaxiinfo}
          </div>
          <div className="detail-field">
            <b>{t('INFORMATION.TAXI.PHONE')}</b>
            {' '}
            {stationInformation.railtaxitext}
          </div>
        </div>
      );
    }
  };

  if (loading) {
    return (
      <div className="information" id="spinner">
        <Spinner animation="border" role="status" id="search-res-spinner" />
      </div>
    );
  }

  if (stationInformation) {
    return (
      <div className="information">
        <h4>{t('INFORMATION.HEADING')}</h4>
        {bicycle()}
        {rentBicycle()}
        {parkAndRail()}
        {taxi()}
      </div>

    );
  }

  return (
    <div className="information">
      {t('INFORMATION.NO_INFORMATION_TO_LOAD')}
    </div>
  );
}
