import React, { useEffect, useState } from 'react';
import ConnectionsService from '../../services/connections.service';
import ConnectionComponent from '../connection/connection.component';
import { Alert } from 'react-bootstrap';
import ToastService from '../../services/toast.service';
import './connections.component.scss';

export default function ConnectionsComponent({ connectionsList }) {
  const connectionsService = new ConnectionsService();
  const toastService = new ToastService();
  const [connections, setConnections] = useState(undefined);

  useEffect(() => {
      setConnections(connectionsList);
  }, [connectionsList]);

  function deleteConnection(id) {
    console.log(id);
    console.log(connections);
    connectionsService.deleteConnection(id).then((res) => {
      console.info(res);
      toastService.emitToast("Verbindung gelöscht.");
    }).catch((err) => {
      console.error(err);
    });
    setConnections(
      connections.filter((connection) => connection.id !== id)
    );
  }

  function saveConnection(from, to) {
    connectionsService.addConnection(from, to).then((res) => {
      console.info(res);
      toastService.emitToast("Verbindung gespeichert.");
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
