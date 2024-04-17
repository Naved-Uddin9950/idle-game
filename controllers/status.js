import { statusView } from "../src/views/status.js";
import { useMiddleware } from "../utils/useMiddleware.js";
import { useState } from "../utils/useState.js";
import { main } from "./main.js";

export const openStatus = () => {
    const game = document.getElementById('game-wrapper');
    const userStatus = statusView();

    game.innerHTML += userStatus;

    const userModal = document.getElementById("userModal");
    userModal.style.display = "block";

    const userInfo = JSON.parse(useState('player'));
    const gold = JSON.parse(useState('gold'));
    if (userInfo) {
        const userInfoHTML = `
            <p>Name: ${userInfo.name}</p>
            <p>HP: ${userInfo.hp}</p>
            <p>Strength: ${userInfo.str}</p>
            <p>Level: ${userInfo.level}</p>
            <p>Experience: ${userInfo.experience}</p>
            <p>Gold: ${gold}</p>
        `;
        document.getElementById("userInfo").innerHTML = userInfoHTML;
    }
    document.querySelector('.close').addEventListener('click', closeStatus);
}

const closeStatus = () => {
    const userModal = document.getElementById("userModal");
    userModal.style.display = "none";

    document.querySelector('.close').removeEventListener('click', closeStatus);
    useMiddleware(main);
}

    // const statusButton = document.querySelector('status');
    
    // if (statusButton) {
    //     statusButton.addEventListener('click', openUserModal);
    // } else {
    //     console.log("Status button not found.");
    // }