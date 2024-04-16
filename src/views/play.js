export const playView = () => {
    return `
        <div class="game-screen">
            <img src="../public/images/player.gif" alt="Main Character" class="main-character" id="main-character">
            <div class="gold-display">Gold: <span id="gold-count">0</span></div>
            <div class="monster" id="monster">Monster</div>
        </div>
    `;
}
