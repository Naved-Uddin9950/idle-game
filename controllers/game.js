import { mainView } from '../src/views/main.js';
import { playView } from '../src/views/play.js';
import { errorHandler } from '../utils/errorHandler.js';
import { setState } from '../utils/setState.js';
import { useState } from '../utils/useState.js';
import { useMiddleware } from '../utils/useMiddleware.js';
import { back } from '../utils/backButton.js';
import { getGold, updateGold } from './gold.js';
// import { monsters } from './monsters.js';
import { Player } from './player.js';

const gameWrapper = document.getElementById('game-wrapper');

const player = new Player('Shinigami', 'Male', 100, 10, 1, 0);
const playerData = JSON.parse(useState('player')) || player;



// Initialiazes main screen
export const main = () => {
    const mainScreen = mainView();
    try {
        
        gameWrapper.innerHTML = mainScreen;
        const goldCoins = Number(useState('gold')) || 0;
        useMiddleware(() => updateGold(goldCoins));
        useMiddleware(play);
    } catch (error) {
        errorHandler('Main screen', error);
    }
}

// Play button functionality
export const play = () => {
    const playBtn = document.querySelector('play');

    try {
        playBtn.addEventListener('click', () => {
            let playScreen = playView();
            gameWrapper.innerHTML = playScreen;
            const goldCoins = Number(useState('gold')) || 0;
            let goldUpdated = false;

            if(!goldUpdated) {
                useMiddleware(() => updateGold(goldCoins));
                goldUpdated = true;
            }

            useMiddleware(getGold);
            // useMiddleware(() => monsters(5));

            let backButton = document.querySelector('back');
            back(backButton, main);

            setState('gold', goldCoins.toString());
            setState('player', JSON.stringify(playerData));
        });
    } catch (error) {
        errorHandler('Play button', error);
    }
}