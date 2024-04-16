export const playStyles = () => {
    const temp = document.getElementById('playScreenStyles');

    if (!temp) {
        const styleElement = document.createElement('style');

        const cssStyles = `
            .game-screen {
                position: relative;
                width: 100%;
                height: 100vh;
                background-color: #f0f0f0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
        
            .main-character {
                position: absolute;
                bottom: 0;
                width: 200px;
                height: auto;
                border: 1px solid black;
                border-radius: 50%;
                background-color: #ffff;
            }
        
            .gold-display {
                position: absolute;
                top: 10px;
                left: 50px;
                font-size: 18px;
            }
        
            .icons {
                position: absolute;
                top: 10px;
                right: 10px;
                display: flex;
                justify-content: flex-end;
            }
        
            .icon {
                width: 40px;
                height: 40px;
                margin-left: 10px;
                cursor: pointer;
            }

            @keyframes moveMonster {
                from {
                  transform: translateY(-100%);
                }
                to {
                  transform: translateY(calc(100vh - 80px));
                }
            }
              
            .monster {
                position: absolute;
                width: 50px;
                height: auto;
                animation: moveMonster 6s linear forwards;
            }    
            
            .monster img {
                width: 50px;
            }
        `;

        styleElement.textContent = cssStyles;
        styleElement.id = 'playScreenStyles';

        document.head.appendChild(styleElement);
    }
}
