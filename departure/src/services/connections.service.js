import axios from 'axios';

export default class ConnectionsService {

  //TODO: remove this with interceptor
  accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODM0OTE3NzksImV4cCI6MTY4MzQ5ODk3OX0.JebbXPPPN4oe8QogFju6iF3PW3syHSdjdi3gGQqRgac';

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
