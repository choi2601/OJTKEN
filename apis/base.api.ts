import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';

import { BASE_URL } from 'config';

class BaseAPI {
  private instance: AxiosInstance;

  constructor(path: string) {
    path = path.startsWith('/') ? path.slice(1) : path;

    const url = new URL(`v2/${path}`, BASE_URL);

    this.instance = axios.create({
      baseURL: url.href,
      validateStatus: (status) => 200 <= status && status < 300,
      paramsSerializer: qs.stringify,
      withCredentials: false,
    });

    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      config.params = {
        ...config.params,
        per_page: 10,
      };
      return config;
    });
  }

  protected async get(url: string, config?: AxiosRequestConfig) {
    const response = await this.instance.get(url, config);
    return response.data;
  }
}

export default BaseAPI;
