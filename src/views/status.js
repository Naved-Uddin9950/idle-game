import { statusStyles } from '../styles/statusStyles.js';
import { useMiddleware } from '../../utils/useMiddleware.js';

export const statusView = () => {
    
    useMiddleware(statusStyles);
    
    return `
        <div id="userModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>User Profile</h2>
                <div id="userInfo"></div>
            </div>
        </div>
    `;
}