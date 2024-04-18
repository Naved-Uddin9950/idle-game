import { useMiddleware } from '../utils/useMiddleware.js';
import { main } from './main.js';
import { play } from './play.js';
import { useState } from '../utils/useState.js';
import { errorHandler } from '../utils/errorHandler.js';

try {
    const isPlaying = JSON.parse(useState('isPlaying'));
    
    if(isPlaying == false) {
        useMiddleware(main);
    } else if(isPlaying == true) {
        useMiddleware(play);
     } else {
        console.error('Undefined playing state');
     }
} catch (error) {
    errorHandler('Game', error);    
}