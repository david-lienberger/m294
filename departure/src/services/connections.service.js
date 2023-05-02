import axios from 'axios';

export default class ConnectionsService {

  getConnections() {
    return axios.get('http://localhost:4242/api/connections', {
      headers: {
        'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODMwMzUwNTcsImV4cCI6MTY4MzA0MjI1N30.UScLU7z8LCBqhmMZmcQhRhSm2kd0EM3MShFt0rX16Qk"
      }
    });
  }

  // eslint-disable-next-line no-unused-vars
  deleteConnection(id) {

  }

  addConnection() {

  }
}
