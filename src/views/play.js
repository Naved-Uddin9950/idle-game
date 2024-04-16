import { playStyles } from "../styles/playScreen.js";

export const playView = () => {
    playStyles();
    return `
        <div class="game-screen">
            <back>⇦</back>
            <div class="gold-display">Gold: <span id="gold-count">0</span></div>
            <div class="icons">
                <p class="icon" id="settings-icon">⚙️</p>
                <p class="icon" id="achievements-icon">&#127942;</p>
                <p class="icon" id="shop-icon">&#128722;</p>
            </div>
            <img src="../public/images/player.gif" alt="Main Character" class="main-character" id="main-character">
            <div class="monster" id="monster"><img src="../public/images/eye_monster.webp" alt="monster"></div>
        </div>
    `;
}
