export const userStyles = () => {
    const temp = document.getElementById('userStyles');

    if(!temp) {
        const styleElement = document.createElement('style');

        const cssStyles = `
            .modal {
                display: none;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0,0,0,0.4);
            }
            
            .modal-content {
                background-color: #fefefe;
                margin: 15% auto;
                padding: 20px;
                border: 1px solid #888;
                width: 80%;
            }
            
            button {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
            }
            
            button:hover {
                opacity: 0.8;
            }          
        `;

        styleElement.textContent = cssStyles;
        styleElement.id = 'userStyles';
        
        document.head.appendChild(styleElement);
    }
}