import { errorHandler } from "./errorHandler";

export const useState = (stateName, state) => {
    try {
        return localStorage.getItem(stateName, state);
    } catch (error) {
        errorHandler('useState', error);
    }
}