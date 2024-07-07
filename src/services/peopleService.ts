import axios from 'axios';

export const actionTypes = {
  SET_USERS: "SET_USERS",
  GET_USER: "GET_USER",
  LOG_IN: "LOG_IN",
};

export const getPeople = (page: number, cb?: (res) => void) => {
  //   return () => {
  return (
    axios
      //  .get(`https://reqres.in/api/users?page=${page}&per_page=5`)
      // .get(`https://swapi.co/api/people`)
      .get(`https://swapi.dev/api/people?page=${page}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.error("Error fetching people:", error);
        throw error;
      })
  );
  //   };
};
export const getPersonById = (url: string, cb?: () => void) => {
  return axios
    .get(`${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching person:", error);
      throw error;
    });
};
