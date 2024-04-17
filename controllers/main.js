import { mainView } from '../src/views/main.js';
import { updateGold } from './gold.js';
import { errorHandler } from '../utils/errorHandler.js';
import { play } from './play.js';
import { useState } from '../utils/useState.js';
import { useMiddleware } from '../utils/useMiddleware.js';
import { user } from './user.js';

export const main = () => {
    try {
        const mainScreen = mainView();
        const gameWrapper = document.getElementById('game-wrapper');
        gameWrapper.innerHTML = mainScreen;
        const goldCoins = Number(useState('gold')) || 0;
        useMiddleware(() => updateGold(goldCoins));
        useMiddleware(user);
        useMiddleware(play);
    } catch (error) {
        errorHandler('Main screen', error);
    }
}
