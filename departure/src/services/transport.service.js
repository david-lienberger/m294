import axios from 'axios';

export default class TransportService {

  getConnection(from, to) {
    return axios.get(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`);
  }
}
