import axios from 'axios';

const API_BASE = 'https://localhost:7046/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add interceptor to add JWT token to requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: credentials => api.post('/user/login', credentials),
  signup: userData => api.post('/user/register', userData),
};

export const speech = {
  textToSpeech: text => api.post('/speech/text-to-speech', { text }),
  speechToText: audioData => api.post('/speech/speech-to-text', audioData),
};

export default config;