import React, { createContext, useEffect, useState } from 'react';
import ConnectionsComponent from '../../components/connections/connections.component';
import SearchComponent from '../../components/search/search.component';

import './dashboard.page.scss';
import ConnectionsService from '../../services/connections.service';

export const ConnectionsContext = createContext(undefined);

export default function DashboardPage() {
  const connectionsService = new ConnectionsService();
  const [connections, setConnections] = useState(null);

  useEffect(() => {
    connectionsService.getConnections().then((res) => {
      const mappedConnections = res.data.map((e, key) => {
        return {
          id: key,
          from: {
            location: {
              name: e.from
            }
          },
          to: {
            location: {
              name: e.to
            }
          }
        }
      })
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
          <ConnectionsContext.Provider value={connections}>
            <ConnectionsComponent />
          </ConnectionsContext.Provider>
        </div>
        <div id='search'>
          <SearchComponent />
        </div>
      </div>
    </>
  );
}
