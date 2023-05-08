import React, { useEffect, useState } from 'react';
import ConnectionsComponent from '../../components/connections/connections.component';
import SearchComponent from '../../components/search/search.component';

import './dashboard.page.scss';
import ConnectionsService from '../../services/connections.service';
import { useTranslation } from 'react-i18next';

export default function DashboardPage() {
  const connectionsService = new ConnectionsService();
  const [connections, setConnections] = useState(null);
  const {t} = useTranslation();

  useEffect(() => {
    connectionsService.getConnections().then((res) => {
      const mappedConnections = res.data.map((element) => {
        return {
          id: element.id,
          from: {
            location: {
              name: element.from,
            },
          },
          to: {
            location: {
              name: element.to,
            },
          },
        };
      });
      setConnections(mappedConnections);
    })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div id='flex'>
        <div id='connections'>
          <h2>{t('DASHBOARD.YOUR_SAVED_CONNECTION')}</h2>
          <ConnectionsComponent connectionsList={connections} />
        </div>
        <div id='search'>
          <SearchComponent />
        </div>
      </div>
    </>
  );
}
