import axios from 'axios';

// baseURL: import.meta.env.REACT_APP_API_URL
const instance = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
});

instance.defaults.timeout = 2500;

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
