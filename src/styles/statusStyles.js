export const statusStyles = () => {
    const temp = document.getElementById('statusStyles');

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
                background-color: rgba(0, 0, 0, 0.5); 
            }

            .modal-content {
                background-color: #fefefe;
                margin: 10% auto; 
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
                width: 80%;
                max-width: 500px;
            }

            .close {
                color: #aaa;
                float: right;
                font-size: 24px;
                font-weight: bold;
                cursor: pointer;
                transition: color 0.3s ease; 
            }

            .close:hover,
            .close:focus {
                color: #555;
                text-decoration: none;
            }

            status {
                display: block;
                background-image: url('https://w7.pngwing.com/pngs/796/551/png-transparent-computer-icons-person-miscellaneous-black-symbol-thumbnail.png');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                color: #fff; 
                border: 1px solid black;
                border-radius: 50%; 
                width: 40px;
                height: 40px;
                margin: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            status:hover {
                background-color: #0056b3; 
            }
        `;

        styleElement.innerText = cssStyles;
        styleElement.id = 'statusStyles';

        document.head.appendChild(styleElement);
    }
}