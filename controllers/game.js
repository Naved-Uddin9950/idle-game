import { mainView } from '../src/views/main.js';
import { playView } from '../src/views/play.js';
import { errorHandler } from '../utils/errorHandler.js';

const gameWrapper = document.getElementById('game-wrapper');

// Initialiazes main screen
export const main = () => {
    const mainScreen = mainView();
    
    try {
        gameWrapper.innerHTML = mainScreen;
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
        });
    } catch (error) {
        errorHandler('Play button', error);
    }
}