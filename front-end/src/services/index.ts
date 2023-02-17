import axios from 'axios';

const api = axios.create({
    baseURL: 'https://feedbackform-back.up.railway.app/',
});

export default api;