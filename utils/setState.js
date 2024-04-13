import { errorHandler } from "./errorHandler.js";

export const setState = (stateName, state) => {
    try {
        return localStorage.setItem(stateName, state);
    } catch (error) {
        errorHandler('setState', error);
    }
}
