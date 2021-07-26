import axios from 'axios';

// const BASE_URL = 'https://reactor-rest-api.herokuapp.com/api';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDVmOTBjMzAwMTQ1N2Q3YzhiNDVmNCIsImlhdCI6MTYyNjc5NzM2NywiZXhwIjoxNjI2ODgzNzY3fQ.F7Db9VmF_z1Y7oZZkMOIiP-hbQt41MSHeTwBcIuAwXM'; // 19:11

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

// DELETE
const deleteProject = async id => {
  try {
    const response = await axios.delete(`/projects/${id}`);

    return response;
  } catch (err) {
    log(err.message);
  }
};

// UPDATE
const updateProject = async (id, payload) => {
  try {
    const response = await axios
      .patch(`/projects/${id}`, payload)
      .then(({ data }) => data);

    return response;
  } catch (err) {
    log(err.message);
  }
};

const api = { getAllProjects, createProject, deleteProject, updateProject };
export default api;
