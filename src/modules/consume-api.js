const consumeApi = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(({ name: 'Game by Temesgen' })),
  })
    .then((res) => res.json())
    .then((result) => result);
};

export default consumeApi;