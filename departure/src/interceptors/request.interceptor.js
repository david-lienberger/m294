import axios from 'axios';

export default class RequestInterceptor {

  setUp() {
    axios.interceptors.request.use((request) => {
      if (request.url.includes('localhost')) {
        request.headers = {
          'x-access-token': '2eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODM1MzEzOTUsImV4cCI6MTY4MzUzODU5NX0.0Iavj1DE7Uot00hkpWdZhXTKWzF9wejoHdtOKXllgdU'
        }
      }
      console.log(request);
      return request;
    })
  }

}

