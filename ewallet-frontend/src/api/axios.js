import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.163.30.213:9091',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
