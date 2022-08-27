import './style.css';

import saveScores from './modules/save-scores.js';
// import loadScores from './modules/load-scores.js';

const saveScoresForm = document.getElementById('add-score-form');
saveScoresForm.addEventListener('submit', saveScores);
