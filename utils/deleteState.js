import { errorHandler } from "./errorHandler.js";

export const deleteState = (stateName) => {
    try {
        return localStorage.removeItem(stateName);
    } catch (error) {
        errorHandler('deleteState', error);
    }
}
