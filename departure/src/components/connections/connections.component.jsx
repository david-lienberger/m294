import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-bootstrap';
import ConnectionsService from '../../services/connections.service';
import ConnectionComponent from '../connection/connection.component';
import ToastService from '../../services/toast.service';
import './connections.component.scss';

export default function ConnectionsComponent({ connectionsList }) {
  const connectionsService = new ConnectionsService();
  const toastService = new ToastService();
  const [connections, setConnections] = useState(undefined);
  const { t } = useTranslation();

  useEffect(() => {
    setConnections(connectionsList);
  }, [connectionsList]);

  function deleteConnection(id) {
    connectionsService.deleteConnection(id).then((res) => {
      toastService.emit(t('UTILS.CONNECTION_REMOVED'), 'success');
      return res;
    }).catch((err) => {
      throw err;
    });
    setConnections(
      connections.filter((connection) => connection.id !== id),
    );
  }

  function saveConnection(from, to) {
    connectionsService.addConnection(from, to).then((res) => {
      toastService.emit(t('UTILS.CONNECTION_SAVED'), 'success');
      return res;
    }).catch((err) => {
      throw err;
    });
  }

  if (connections && connections.length > 0) {
    return (
      <div id="connection-list">
        {
            connections.map((connection, key) => (
              <div key={key}>
                <ConnectionComponent
                  connection={connection}
                  deleteConnection={deleteConnection}
                  saveConnection={saveConnection}
                />
              </div>
            ))
          }
      </div>
    );
  }

  return (
    <Alert key={1} variant="primary">{t('UTILS.NO_CONNECTIONS_TO_LOAD')}</Alert>
  );
}
