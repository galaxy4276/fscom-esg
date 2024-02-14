import axios from 'axios';

/**
 * 서버 네트워크 요청 객체
 * @type {axios.AxiosInstance}
 */
const client = axios.create({
  baseURL: '/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(res => {
  return res.data;
}, error => Promise.reject(error.response.data));

export const chatBotClient = axios.create({
  baseURL: "https://7491-1-223-40-19.ngrok-free.app",
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

chatBotClient.interceptors.response.use(res => {
  return res.data;
}, error => Promise.reject(error.response.data));


export default client;
