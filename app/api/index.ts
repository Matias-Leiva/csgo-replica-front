import axios, {AxiosInstance} from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://192.168.4.1',
  headers: {
    'Content-type': 'application/json',
  },
});
