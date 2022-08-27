const loadScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XYZ2l4d7IVkemOTTVg2fUdxyz/scores/');
  const result = await response.json();

  const data = result.result;
  data.forEach((user) => {
    const tableContainer = document.querySelector('.table-body');
    tableContainer.innerHTML += `
                            <tr>
                            <td>${user.user}: ${user.score}</td>
                            </tr> `;
  });
};
export default loadScores;