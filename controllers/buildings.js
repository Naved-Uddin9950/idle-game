import { errorHandler } from "../utils/errorHandler.js";
import { buildingsView } from "../src/views/buildings.js";

const gameWrapper = document.getElementById('game-wrapper');
const buildingsScreen = buildingsView();

export const buildings = () => {
    try {
        gameWrapper.innerHTML += buildingsScreen;
        const warriorBuilding = document.getElementById('warrior-building');
        warriorBuilding.addEventListener('click', deployWarriors);
    } catch (error) {
        errorHandler('Buildings', error);        
    }

}

const deployWarriors = () => {
    console.log(gameWrapper)
}