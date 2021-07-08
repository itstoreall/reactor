import axios from 'axios';

const BASE_URL = 'https://reactor-rest-api.herokuapp.com/api';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDVmOTBjMzAwMTQ1N2Q3YzhiNDVmNCIsImlhdCI6MTYyNTc4MjQ4NiwiZXhwIjoxNjI1ODY4ODg2fQ.kyE2cXT4oC8vKjOqzfiq_PuND7rJM7fy9ie0PxlVRU4';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common = { Authorization: `bearer ${AUTH_TOKEN}` };

const { log } = console;

// log(axios.default.baseURL);

export const getAllProjects = async () => {
  try {
    const { data } = await axios.get(`/projects`);
    const { projects } = data.data;
    // log(projects);

    return projects;
  } catch (err) {
    log('axios ERR:-->', { err });
  }
};

export const createProject = async payload => {
  try {
    const response = await axios.post(`/projects`, payload);
    log(response);
  } catch (err) {
    log('axios ERR:-->', { err });
  }
};

// export const createProject = payload =>
//   fetch('https://reactor-rest-api.herokuapp.com/api/projects', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   }).then(res => res.json());
