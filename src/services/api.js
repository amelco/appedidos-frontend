import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333',    // development
    baseURL: 'https://morning-falls-78292.herokuapp.com/',  // deploy 
});

export default api;
