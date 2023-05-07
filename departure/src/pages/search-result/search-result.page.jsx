import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TransportService from '../../services/transport.service';
import ConnectionsComponent from '../../components/connections/connections.component';
import './search-result.page.scss';
import moment from 'moment';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const [connections, setConnections] = useState(undefined);
  const transportService = new TransportService();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const nowDate = new Date();

  useEffect(() => {
    transportService.getConnection(from, to).then((res) => {
      setConnections(res.data['connections']);
    });
  }, []);

  return (
    <>
      <div id='search-res-list'>
        <div id='search-res-header'>
          <div id='search-res-destinations'>
            {from}
            <span className='material-symbols-outlined'>
            trending_flat
          </span>
            {to}
          </div>
          <div id='search-res-date'>
            { moment(nowDate).locale('de-ch').format('llll') }
          </div>
        </div>
        <ConnectionsComponent connectionsList={connections} />
      </div>
    </>
  );
}
