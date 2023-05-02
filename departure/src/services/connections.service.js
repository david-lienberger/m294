import axios from 'axios';

export default class ConnectionsService {

  //TODO: remove this with interceptor
  accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODMwNTI3OTIsImV4cCI6MTY4MzA1OTk5Mn0.wcWwExzazH6eTr1Pj1xczxsjHDqq9q0vqYL6n_U0Ucc';

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
