import { playView } from '../src/views/play.js';
import { setState } from '../utils/setState.js';
import { useState } from '../utils/useState.js';
import { useMiddleware } from '../utils/useMiddleware.js';
import { back } from '../utils/backButton.js';
import { getGold, updateGold } from './gold.js';
import { errorHandler } from '../utils/errorHandler.js';
import { main } from './main.js';
import { buildings } from './buildings.js';

export const play = () => {
    try {

        const playerData = JSON.parse(useState('player'));
        const gameWrapper = document.getElementById('game-wrapper');

        let playScreen = playView();

        gameWrapper.innerHTML = playScreen;

        setState('isPlaying', true);
        const goldCoins = Number(useState('gold')) || 0;
        let goldUpdated = false;

        if (!goldUpdated) {
            useMiddleware(() => updateGold(goldCoins));
            goldUpdated = true;
        }

        useMiddleware(getGold);
        useMiddleware(buildings);
        // useMiddleware(() => monsters(5));

        let backButton = document.querySelector('back');
        back(backButton, main);

        setState('gold', goldCoins.toString());
        setState('player', JSON.stringify(playerData));
    } catch (error) {
        errorHandler('Play button', error);
    }
}