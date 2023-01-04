import axios from 'axios';
// const baseURL = process.env.BASE_URL;
const baseURL = 'https://636cc906ab4814f2b26e2b1f.mockapi.io/';
const headers = { 'Content-Type': 'application/json' };
class Axios {
  instance;
  interceptor;
  constructor() {
    const instance = axios.create({
      baseURL,
      headers
    });
    // request interceptor
    instance.interceptors.request.use(
      (config) => {
        if (config.headers) {
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    // response interceptor
    const interceptor = instance.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error)
    );
    this.instance = instance;
    this.interceptor = interceptor;
  }
  get Instance() {
    return this.instance;
  }
  useInterceptor() {
    if (this.interceptor === null) {
      const interceptor = this.instance.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error)
      );
      this.interceptor = interceptor;
    }
  }
  ejectInterceptor() {
    if (this.interceptor !== null) {
      this.instance.interceptors.response.eject(this.interceptor);
      this.interceptor = null;
    }
  }
  get(url, config) {
    this.useInterceptor();
    return this.Instance.get(url, config);
  }
  post(url, data, config) {
    this.useInterceptor();
    return this.Instance.post(url, data, config);
  }
  put(url, data, config) {
    this.useInterceptor();
    return this.Instance.put(url, data, config);
  }
  delete(url, config) {
    this.useInterceptor();
    return this.Instance.delete(url, config);
  }
  pull(url, data, config) {
    this.ejectInterceptor();
    return this.Instance.post(url, data, config);
  }
}

const HttpClient = new Axios();
export default HttpClient;
