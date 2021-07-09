import axios from 'axios';

// const BASE_URL = 'https://reactor-rest-api.herokuapp.com/api';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDVmOTBjMzAwMTQ1N2Q3YzhiNDVmNCIsImlhdCI6MTYyNTgxOTkxMiwiZXhwIjoxNjI1OTA2MzEyfQ.OnxyEELA0Du59q9AyCKcp5J1lQcjugyAaVWkZ-r33ns';

axios.defaults.baseURL = 'http://localhost:5288/api';
// axios.defaults.baseURL = 'https://reactor-rest-api.herokuapp.com/api';
axios.defaults.headers.common = { Authorization: `bearer ${AUTH_TOKEN}` };

const { log } = console;

// GET All
export const getAllProjects = async () => {
  try {
    const { data } = await axios.get(`/projects`);
    const { projects } = data.data;

    return projects;
  } catch (err) {
    log('axios: GET All ERR:-->', { err });
  }
};

// CREATE
export const createProject = async payload => {
  try {
    const response = await axios.post(`/projects`, payload);
    return `${response.statusText}: ${response.status}`;
  } catch (err) {
    log('axios CREATE ERR:-->', { err });
  }
};
