export const buildingsStyle = () => {
    const temp = document.getElementById('buildingsStyle');

    if(!temp) {
        const styleElement = document.createElement('style');

        const cssStyles = `
            .left-container {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
            
            .building {
                background-color: #ccc;
                border: 1px solid #999;
                border-radius: 5px;
                padding: 10px;
                margin-bottom: 10px;
                cursor: pointer;
            }
            
            .building:hover {
                background-color: #ddd;
            }
        `;

        styleElement.innerText = cssStyles;
        styleElement.id = 'buildingsStyle';

        document.head.appendChild(styleElement);
    }
}