import { main } from '../controllers/game.js';
import { play } from '../controllers/game.js';
import { useMiddleware } from '../utils/useMiddleware.js';

useMiddleware(main);
useMiddleware(play);