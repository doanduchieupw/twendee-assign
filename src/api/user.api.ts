import axios from 'axios';

const API_URL = 'https://randomuser.me/api';

export const getUsers = (page: number, limit: number) => axios.get(`${API_URL}/?page=${page}&results=${limit}`);
