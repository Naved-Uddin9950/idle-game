let goldCoins = 0;

// Update resource count display
function updateGold() {
  const goldDisplay = document.getElementById('gold-count');
  goldDisplay.textContent = goldCoins;
}

// Event listener for settings icon
document.getElementById('settings-icon').addEventListener('click', () => {
  const settingsMenu = document.getElementById('settings-menu');
  // Toggle visibility of settings menu
  settingsMenu.classList.toggle('show');
});

// Initialize resource display
updateResourceDisplay();