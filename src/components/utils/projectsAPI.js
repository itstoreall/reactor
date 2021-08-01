import axios from 'axios';

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
    log('axios CREATE ERR.message:-->', err.message);
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
