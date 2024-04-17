import { useMiddleware } from "../../utils/useMiddleware.js";

export const user = () => {
    return `
        <div id="myModal" class="modal">
            <div class="modal-content">
                <h2>Enter Your Information</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name">
                <label for="gender">Gender:</label>
                <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
                <button id="submitBtn">Submit</button>
            </div>
        </div>
    `;
}