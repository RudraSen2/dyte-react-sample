import axios, { AxiosInstance } from 'axios';

// const API: AxiosInstance = axios.create({
//     baseURL: 'https://dyte-sample.herokuapp.com',
//     responseType: 'json',
// });

const API: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    responseType: 'json',
});

export default API;
