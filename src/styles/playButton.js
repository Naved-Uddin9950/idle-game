export const playButtonStyles = () => {
    const temp = document.getElementById('playButtonStyles');

    if(!temp) {
        const styleElement = document.createElement('style');

        const cssStyles = `
        play {
            padding: 10px 20px;
            font-size: 18px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        play:hover {
            background-color: #45a049;
        }
        `;

        styleElement.textContent = cssStyles;
        styleElement.id = 'playButtonStyles';
        document.head.appendChild(styleElement);
    }
}