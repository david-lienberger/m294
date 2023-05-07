import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TransportService from '../../services/transport.service';
import ConnectionsComponent from '../../components/connections/connections.component';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const [connections, setConnections] = useState(undefined);
  const transportService = new TransportService();

  useEffect(() => {
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    transportService.getConnection(from, to).then((res) => {
      setConnections(res.data['connections']);
    });
  }, []);

  return (
    <>
      <div id='search-res-list'>
        <ConnectionsComponent connectionsList={connections} />
      </div>
    </>
  );
}
