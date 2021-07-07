export const getAllProjects = () =>
  fetch('https://reactor-rest-api.herokuapp.com/api/projects').then(res =>
    res.json(),
  );
