
import axios from './axios';

export const getAllUser = () => {
  return axios.get(`/v1/users/`);
};

export const createUser = (userData) => {
  return axios.post('/v1/users', userData);
};

export const getUserById = (userId) => {
  return axios.get(`/v1/users/${userId}`);
};

export const updateUser = (userId, userData) => {
  return axios.put(`/v1/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return axios.delete(`/v1/users/${userId}`);
};

export const searchUserByName = (searchQuery) => {
  return axios.get('/v1/search', {
    params: { search: searchQuery }
  });
};
