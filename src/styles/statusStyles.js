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
            background-color: rgba(0,0,0,0.4);
            }

            .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            }

            .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            }

            .close:hover,
            .close:focus {
            color: black;
            text-decoration: none;
            }
        `;

        styleElement.innerText = cssStyles;
        styleElement.id = 'statusStyles';

        document.head.appendChild('statusStyles');
    }
}