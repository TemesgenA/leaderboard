const saveScores = async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const formData = { user, score };

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XYZ2l4d7IVkemOTTVg2fUdxyz/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  await response.json();
  window.location.reload();
};
export default saveScores;