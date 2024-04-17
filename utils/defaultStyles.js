import { errorHandler } from "./errorHandler.js";

export const defaultStyles = () => {
    try {
        let styleSheets = document.querySelectorAll('style');
        if (styleSheets.length > 0) {
            for(let i=0; i<styleSheets.length;i++) {
                styleSheets[i].remove();
            }
        }
    } catch (error) {
        errorHandler('defaultStyles middleware', error);        
    }
}