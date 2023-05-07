import axios from 'axios';

export default class ConnectionsService {

  //TODO: remove this with interceptor
  accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODM0NzcwMDUsImV4cCI6MTY4MzQ4NDIwNX0.8fc9ZorG94u0bvGzlC1Xf4F8WD-wsTa2SYZVfxKcM-w';

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
