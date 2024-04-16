import { mainView } from '../src/views/main.js';
import { playView } from '../src/views/play.js';
import { errorHandler } from '../utils/errorHandler.js';
import { setState } from '../utils/setState.js';
import { useState } from '../utils/useState.js';
import { useMiddleware } from '../utils/useMiddleware.js';
import { back } from '../utils/backButton.js';

const gameWrapper = document.getElementById('game-wrapper');
const goldCoins = useState('gold') ?? '0';

// Initialiazes main screen
export const main = () => {
    const mainScreen = mainView();
    try {
        gameWrapper.innerHTML = mainScreen;
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
            let backButton = document.querySelector('back');
            back(backButton, main);
        });
    } catch (error) {
        errorHandler('Play button', error);
    }
}


setState('gold', goldCoins.toString());