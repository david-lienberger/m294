import axios from 'axios';

export default class ConnectionsService {
  getConnections() {
    return axios.get('https://departure-api-wa.azurewebsites.net/api/connections');
  }

  deleteConnection(id) {
    return axios.delete(`https://departure-api-wa.azurewebsites.net/api/connections/${id}`);
  }

  addConnection(from, to) {
    const body = {
      from,
      to,
    };
    return axios.post('https://departure-api-wa.azurewebsites.net/api/connections', body);
  }
}
