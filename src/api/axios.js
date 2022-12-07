import axios from 'axios';
// const BASE_URL = 'https://buggenix-gitapp.herokuapp.com/api/';
const BASE_URL = "https://buggenix-backend-team2-sai-chaitanya.vercel.app/api/";
// const BASE_URL = 'http://localhost:8800/api/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});