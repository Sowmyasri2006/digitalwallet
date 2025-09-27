import api from '../api/axios';

const API_URL="http://54.163.30.213:9091/auth";

export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (user) => api.post('/auth/register', user);
