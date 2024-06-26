export const mainStyles = () => {
    const temp = document.getElementById('mainScreenStyles');

    if (!temp) {
        const styleElement = document.createElement('style');

        const cssStyles = `
            .main-screen {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            
            .title {
                font-size: 24px;
                margin-bottom: 20px;
            }
            
            .main-character {
                width: 200px;
                height: auto;
                margin-bottom: 20px;
            }
            
            .gold-display {
                font-size: 18px;
                margin-bottom: 20px;
            }
            
            .icons {
                display: flex;
            }
            
            .icon {
                width: 40px;
                /* Adjust size as needed */
                height: 40px;
                margin: 0 10px;
                cursor: pointer;
            }
        `;
        
        styleElement.textContent = cssStyles;
        styleElement.id = 'mainScreenStyles';

        document.head.appendChild(styleElement);
    }
}