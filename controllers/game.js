import { useMiddleware } from '../utils/useMiddleware.js';
import { main } from './main.js';
import { play } from './play.js';

useMiddleware(main);
useMiddleware(play);


