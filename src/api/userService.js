
import axios from './axios';

export const getAllUser = () => {
  return axios.get(`/v1/users/`);
};

export const createUser = (userData) => {
  return axios.post('/v1/users', userData);
};

