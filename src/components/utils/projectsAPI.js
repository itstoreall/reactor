import axios from 'axios';

// const BASE_URL = 'https://reactor-rest-api.herokuapp.com/api';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDVmOTBjMzAwMTQ1N2Q3YzhiNDVmNCIsImlhdCI6MTYyNTk5NDQwMSwiZXhwIjoxNjI2MDgwODAxfQ.ZWfTF96saLRNH5UP5QMs3B3axPuqS_o3hixpVypi9Ho'; // 12:07

// axios.defaults.baseURL = 'http://localhost:5288/api';
axios.defaults.baseURL = 'https://reactor-rest-api.herokuapp.com/api';
axios.defaults.headers.common = { Authorization: `bearer ${AUTH_TOKEN}` };

const { log } = console;

// GET All
const getAllProjects = async () => {
  try {
    const { data } = await axios.get(`/projects`);
    const { projects } = data.data;

    return projects;
  } catch (err) {
    log('axios: GET All ERR:-->', { err });
  }
};

// CREATE
const createProject = async payload => {
  try {
    const response = await axios.post(`/projects`, payload);

    return `${response.statusText}: ${response.status}`;
  } catch (err) {
    log('axios CREATE ERR:-->', { err });
  }
};

const api = { getAllProjects, createProject };
export default api;
