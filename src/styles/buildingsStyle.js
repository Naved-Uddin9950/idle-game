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

            .right-container {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
            
            .building {
                background-color: #ccc;

                background-image: url('https://pics.craiyon.com/2023-10-11/dd028a73d75240198e96e6bb1ecd54ab.webp');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 100px;
                height: 100px;

                border: 1px solid #999;
                border-radius: 50%;
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