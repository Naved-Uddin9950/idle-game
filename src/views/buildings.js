import { buildingsStyle } from '../styles/buildingsStyle.js';
import { useMiddleware } from '../../utils/useMiddleware.js';

export const buildingsView = () => {

    useMiddleware(buildingsStyle);

    return `
    <div class="left-container">
        <div class="building" id="warrior-building">Warrior</div>
        <div class="building" id="cannon-building">Canon</div>
        <div class="building" id="hero-building">Hero 1</div>
        </div>
        
        <div class="right-container">
        <div class="building" id="archer-building">Archer</div>
        <div class="building" id="bomber-building">Bomber</div>
        <div class="building" id="hero2-building">Hero 2</div>
    </div>
    `;
}