import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
