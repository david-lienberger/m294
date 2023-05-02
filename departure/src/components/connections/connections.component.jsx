import React, { useEffect, useState } from 'react';
import ConnectionsService from '../../services/connections.service';
import ConnectionComponent from '../connection/connection.component';

export default function ConnectionsComponent() {
  const [connections, setConnections] = useState(undefined);
  const connectionsService = new ConnectionsService();

  useEffect(() => {
    connectionsService.getConnections().then((res) => {
      setConnections(res.data);
    })
      .catch((err) => {
      console.error(err);
    });
  }, []);

  function deleteConnection(id) {
    connectionsService.deleteConnection(id).then((res) => {
      console.info(res);
    }).catch((err) => {
      console.error(err);
    });
    setConnections(
      connections.filter((connection) => connection.id !== id)
    );
  }

  return (
    <>
      {
        connections &&
        <div id='connection-list'>
          {
            connections.map((connection) => {
              return (
                connections &&
                <div key={connection.id}>
                  <ConnectionComponent connection={connection} deleteConnection={deleteConnection}></ConnectionComponent>
                </div>
              );
            })
          }
        </div>
      }
    </>

  );
}
