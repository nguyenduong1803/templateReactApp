import axios from 'axios';
const baseURL = process.env.BASE_URL;
const headers = { 'Content-Type': 'application/json' };
class Axios {
  instance;
  interceptor;
  constructor() {
    const instance = axios.create({
      baseURL,
      headers,
    });
    // request interceptor
    instance.interceptors.request.use(
      (config) => {
        if (config.headers) {
        }
      },
      (error) => Promise.reject(error),
    );
    // response interceptor
    instance.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error),
    );
    this.instance = instance;
    this.interceptor = this.interceptor;
  }
}
