export const backStyles = () => {
    const temp = document.getElementById('backButtonStyles');

    if(!temp) {
        const styleElement = document.createElement('style');

        const cssStyles = `
            back {
                position: absolute;
                top: 0px;
                left: 20px;
                font-size: 28px;
                cursor: pointer;
                font-weight: bold;
            }
            
            back:hover {
                transform: scale(1.1);
            }
            
            back:active {
                transform: rotate(360deg);
                animation-duration: 3s;
            }
        `;

        styleElement.textContent = cssStyles;
        styleElement.id = 'backButtonStyles';

        document.head.appendChild(styleElement);
    }
}