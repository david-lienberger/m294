import React, { useContext, useEffect, useState } from 'react';
import ConnectionsService from '../../services/connections.service';
import ConnectionComponent from '../connection/connection.component';
import { Alert } from 'react-bootstrap';
import { ConnectionsContext } from '../../pages/dashboard/dashboard.page';

export default function ConnectionsComponent({ connectionsList }) {
  const connectionsContext = useContext(ConnectionsContext);
  const connectionsService = new ConnectionsService();
  const [connections, setConnections] = useState(undefined);

  useEffect(() => {
    if (connectionsContext) {
      setConnections(connectionsContext);
    } else {
      setConnections(connectionsList);
    }
  }, [connectionsContext, connectionsList]);

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

  function saveConnection(id) {
    connectionsService.addConnection(id).then((res) => {
      console.info(res);
    }).catch((err) => {
      console.error(err);
    });
  }

  if (connections && connections.length > 0) {
    return (
      <>
        <div id='connection-list'>
          {
            connections.map((connection, key) => {
              return (
                <div key={key}>
                  <ConnectionComponent connection={connection} deleteConnection={deleteConnection} saveConnection={saveConnection}></ConnectionComponent>
                </div>
              );
            })
          }
        </div>
      </>
    );
  }

  return (
    <>
    <Alert key={1} variant={'primary'}>Es können keine Verbindungen geladen werden.</Alert>
    </>
  );

}
