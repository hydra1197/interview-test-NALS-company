import axios from 'axios';
import configs from '../../configs';
import { ToastifyService } from '..';

class AxiosService {
  constructor() {
    const instance = axios.create();
    const token = localStorage.getItem('token');
    instance.interceptors.response.use(this.handleSuccess, this.handleError);

    if (token) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    this.instance = instance;
    this.apiUr = configs.apiUrl;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    const message = error.response && error.response.data ? error.response.data.message : error.message;
    ToastifyService.error(message);

    throw error;
  }

  setAuthorization(token) {
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  get(endpoint) {
    return this.instance.get(`${this.apiUr}/${endpoint}`);
  }

  post(endpoint, body) {
    return this.instance.post(`${this.apiUr}/${endpoint}`, body);
  }

  put(endpoint, body) {
    return this.instance.put(`${this.apiUr}/${endpoint}`, body);
  }

  delete(endpoint) {
    return this.instance.delete(`${this.apiUr}/${endpoint}`);
  }
}

export default new AxiosService();