export const updateGold = (goldCoins) => {
  const goldDisplay = document.getElementById('gold-count');
  goldDisplay.textContent = goldCoins;
}

export const getGold = () => {
  document.getElementById('main-character').addEventListener('click', () => {
    goldCount++;
    updateGoldDisplay();
  });
}