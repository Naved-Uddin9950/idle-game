import { userStyles } from '../styles/userStyles.js';
import { useMiddleware } from "../../utils/useMiddleware.js";

export const userView = () => {

    useMiddleware(userStyles);

    return `
        <div id="myModal" class="modal">
            <div class="modal-content">
                <h2>Enter Your Information</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name"><br><br>
                <label for="gender">Gender:</label>
                <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
                <button id="submitBtn">Submit</button>
            </div>
        </div>
    `;
}