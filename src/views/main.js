import { mainStyles } from "../styles/mainScreen.js";
import { playButtonStyles } from "../styles/playButton.js";
import { useMiddleware } from "../../utils/useMiddleware.js";
import { defaultStyles } from '../../utils/defaultStyles.js';

export const mainView = () => {
    
    useMiddleware(defaultStyles);
    useMiddleware(mainStyles);
    useMiddleware(playButtonStyles);

    return `
        <div class="main-screen">
            <div class="title">Idle Tapper Game</div>
            <img src="../public/images/player.gif" alt="Main Character" class="main-character">
            <play>Play</play>
            <div class="gold-display">Gold: <span id="gold-count">0</span></div>
            <div class="icons">
                <p class="icon" id="settings-icon">⚙️</p>
                <p class="icon" id="achievements-icon">&#127942;</p>
                <p class="icon" id="shop-icon">&#128722;</p>
            </div>
        </div>

        <div class="settings-menu" id="settings-menu">
        </div>
    `;
}
