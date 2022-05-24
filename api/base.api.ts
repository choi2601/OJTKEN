import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '@const/apiUrl';

const axios_timeout = 8000;
const axios_headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json; charset=utf-8',
};

const createAxios = (originUrl, url) => {
  const axiosService = axios.create({
    baseURL: `${originUrl}/${url}`,
    timeout: axios_timeout,
    headers: axios_headers,
  });

  axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
    config.params = {
      ...config.params,
      per_page: 10,
    };
    return config;
  });

  return axiosService;
};

const axiosProduct = createAxios(BASE_URL, 'beers');

export { axiosProduct };
