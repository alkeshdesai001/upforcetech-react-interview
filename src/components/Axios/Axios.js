const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 5000,
});

export default instance;
