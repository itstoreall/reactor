export const getAllProjects = () =>
  fetch('https://reactor-rest-api.herokuapp.com/api/projects').then(res =>
    res.json(),
  );

export const createProjects = payload =>
  fetch('https://reactor-rest-api.herokuapp.com/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
