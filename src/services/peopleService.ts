import axios from 'axios';

export const actionTypes = {
  SET_USERS: "SET_USERS",
  GET_USER: "GET_USER",
  LOG_IN: "LOG_IN",
};

export const getPeople = (page: number, cb?: (res) => void) => {
  return axios
    .get(`https://swapi.dev/api/people?page=${page}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      throw error;
    });
};
export const getPersonByUrl = (url: string, cb?: () => void) => {
  return axios
    .get(`${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
export const getPersonById = (id: string, cb?: () => void) => {
  return axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
export const getPlanetById = (id: string, cb?: () => void) => {
  return axios
    .get(`https://swapi.dev/api/planets/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
