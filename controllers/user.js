import { userView } from '../src/views/user.js';
import { useState } from "../utils/useState.js";
import { setState } from "../utils/setState.js";
import { errorHandler } from "../utils/errorHandler.js";

export const user = () => {
    try {
        let player = useState('player');
    
        if (!player) {
            let userModal = userView();
            let game = document.getElementById('game-wrapper');
            game.innerHTML += userModal;

            let modal = document.getElementById("myModal");
            modal.style.display = "block";
            document.getElementById("submitBtn").addEventListener("click", function() {
              let name = document.getElementById("name").value;
              let gender = document.getElementById("gender").value;
              if (name.trim() !== "" && gender.trim() !== "") {
    
                let player = {
                  name: name,
                  gender: gender,
                  hp: 100,
                  str: 10,
                  level: 1,
                  experience: 0
                };
                setState('player', JSON.stringify(player));
    
                let modal = document.getElementById("myModal");
                modal.style.display = "none";
              } else {
                alert("Please enter your name and gender.");
              }
            });
        }
        
    } catch (error) {
        errorHandler('User Controller', error);
    }
}

