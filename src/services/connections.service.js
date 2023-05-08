import axios from 'axios';

export default class ConnectionsService {
  getConnections() {
    return axios.get('http://localhost:4242/api/connections');
  }

  deleteConnection(id) {
    return axios.delete(`http://localhost:4242/api/connections/${id}`);
  }

  addConnection(from, to) {
    const body = {
      from,
      to,
    };
    return axios.post('http://localhost:4242/api/connections', body);
  }
}
