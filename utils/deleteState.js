import { errorHandler } from "./errorHandler";

export const deleteState = (stateName) => {
    try {
        return localStorage.removeItem(stateName);
    } catch (error) {
        errorHandler('deleteState', error);
    }
}
