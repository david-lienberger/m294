import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import { Alert, Spinner } from 'react-bootstrap';

import './search-result.page.scss';
import { useTranslation } from 'react-i18next';
import TransportService from '../../services/transport.service';
import ConnectionsComponent from '../../components/connections/connections.component';
import BackButtonComponent from '../../components/back-button/back-button.component';

export default function SearchResultPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [connections, setConnections] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const transportService = new TransportService();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const now = new Date();
  let connectionDate;

  useEffect(() => {
    transportService.getConnection(from, to).then((res) => {
      setConnections(res.data.connections);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div id="spinner-wrapper">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (connections) {
    connectionDate = new Date(connections[0].from.departure);
  }

  return (
    <>
      <div id="back-button-search-result">
        <BackButtonComponent />
      </div>
      <div id="search-res-list">
        <div id="search-res-header">
          <div id="search-res-destinations">
            {from}
            <span className="material-symbols-outlined">trending_flat</span>
            {to}
          </div>
          <div id="search-res-date">{moment(now).locale('de-ch').format('llll')}</div>
        </div>
        {
            (connections && connectionDate.getDate() > now.getDate())
            && <Alert variant="primary">{t('SEARCH_RESULT.DATE_IS_TOMORROW')}</Alert>
        }
        <ConnectionsComponent connectionsList={connections} />
      </div>
    </>
  );
}
