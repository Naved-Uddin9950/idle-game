import { errorHandler } from "./errorHandler.js";

export const useState = (stateName) => {
    try {
        return localStorage.getItem(stateName);
    } catch (error) {
        errorHandler('useState', error);
    }
}