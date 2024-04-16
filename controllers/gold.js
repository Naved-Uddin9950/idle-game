import { useState } from "../utils/useState.js";
import { setState } from "../utils/setState.js";

export const updateGold = (goldCoins) => {
  const goldDisplay = document.getElementById('gold-count');
  setState('gold', goldCoins);
  goldDisplay.textContent = goldCoins;
}

export const getGold = () => {
  document.getElementById('main-character').addEventListener('click', () => {
    let goldCount = Number (useState('gold')) ?? 0;
    goldCount++;
    updateGold(goldCount);
  });
}