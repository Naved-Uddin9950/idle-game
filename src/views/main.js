// export const mainView = () => {
//     return `
//     <div class='main-container'>
//         <settings><h1>⚙</h1></settings>
//         <play>Play</play>
//     </div>
//     `;
// }


export const mainView = () => {
    return `
        <div class="main-screen">
            <div class="title">Idle Tapper Game</div>
            <img src="../public/images/player.gif" alt="Main Character" class="main-character">
            <play>Play</play>
            <div class="resource-display">Gold: <span id="resource-count">0</span></div>
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
