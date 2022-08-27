import './style.css';

import saveScores from './modules/save-scores.js';
import loadScores from './modules/load-scores.js';

// importing save-score module
const saveScoresForm = document.getElementById('add-score-form');
saveScoresForm.addEventListener('submit', saveScores);

// importing load score module
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', loadScores);
