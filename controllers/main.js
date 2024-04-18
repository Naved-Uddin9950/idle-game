import { mainView } from '../src/views/main.js';
import { updateGold } from './gold.js';
import { errorHandler } from '../utils/errorHandler.js';
import { play } from './play.js';
import { useState } from '../utils/useState.js';
import { useMiddleware } from '../utils/useMiddleware.js';
import { user } from './user.js';
import { openStatus } from './status.js';
import { setState } from '../utils/setState.js';

export const main = () => {
    try {
        const mainScreen = mainView();
        const gameWrapper = document.getElementById('game-wrapper');
        gameWrapper.innerHTML = mainScreen;
        
        setState('isPlaying', false);
        const goldCoins = Number(useState('gold')) || 0;

        useMiddleware(() => updateGold(goldCoins));

        const playBtn = document.querySelector('play');
        playBtn.addEventListener('click', () => {
            useMiddleware(play);
        });

        useMiddleware(user);

        const statusButton = document.querySelector('status');
    
        if (statusButton) {
            statusButton.addEventListener('click', openStatus);
        } else {
            console.log("Status button not found.");
        }
        
    } catch (error) {
        errorHandler('Main screen', error);
    }
}
