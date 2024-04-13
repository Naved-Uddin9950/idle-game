import { errorHandler } from "./errorHandler.js";

export const useState = (stateName, state) => {
    try {
        return localStorage.getItem(stateName, state);
    } catch (error) {
        errorHandler('useState', error);
    }
}