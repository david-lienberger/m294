import axios from 'axios';

export default class ConnectionsService {

  //TODO: remove this with interceptor
  accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODM0ODQ1NTUsImV4cCI6MTY4MzQ5MTc1NX0.YZEkCgtPPQqNpggsF3nWll8hJEQISjkV_mk3E2JLMZ8';

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

  addConnection(from, to) {
    const body = {
      from: from,
      to: to
    }
    return axios.post('http://localhost:4242/api/connections', body, {
      headers: {
        'x-access-token': this.accessToken
      }
    });
  }
}
