import axios from 'axios';

export default class ConnectionsService {

  //TODO: remove this with interceptor
  accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODMyMTkxMDcsImV4cCI6MTY4MzIyNjMwN30.5KWS-1KaTDHguQCdcUFG13BTDkRACVILk8H8madVrvk';

  getConnections() {
    return axios.get('http://localhost:4242/api/connections', {
      headers: {
        'x-access-token': this.accessToken
      }
    });
  }

  deleteConnection(id) {
    return axios.delete(`http://localhost:4242/api/connections/${id}`, {
      headers: {
        'x-access-token': this.accessToken
      }
    });
  }

  addConnection() {

  }
}
