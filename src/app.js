import { main } from '../controllers/game.js';
// import { play } from '../controllers/game.js';
import { useMiddleware } from '../utils/useMiddleware.js';

useMiddleware(main);
// useMiddleware(play);

// Dummy resource count for demonstration
let resourceCount = 0;

// Update resource count display
function updateResourceDisplay() {
  const resourceDisplay = document.getElementById('resource-count');
  resourceDisplay.textContent = resourceCount;
}

// Event listener for play button
document.getElementById('play-btn').addEventListener('click', () => {
  // Placeholder function for starting the game
  alert('Starting the game...');
});

// Event listener for settings icon
document.getElementById('settings-icon').addEventListener('click', () => {
  const settingsMenu = document.getElementById('settings-menu');
  // Toggle visibility of settings menu
  settingsMenu.classList.toggle('show');
});

// Initialize resource display
updateResourceDisplay();
