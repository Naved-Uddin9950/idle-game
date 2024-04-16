const createMonster = () => {
    const monsterElement = document.createElement('div');
    monsterElement.classList.add('monster');
    monsterElement.innerHTML = '<img src="../public/images/eye_monster.webp" alt="monster">';

    const randomX = Math.random() * (window.innerWidth - 200);
    monsterElement.style.left = `${randomX}px`;
    monsterElement.style.top = '-100px';

    document.body.appendChild(monsterElement);

    return monsterElement;
}

export const monsters = (numMonsters) => {
    let remainingMonsters = numMonsters;
    let defeatedMonsters = 0;

    function spawnNextMonster() {
        if (remainingMonsters > 0) {
            const monster = createMonster();

            // Listen for collision with player
            monster.addEventListener('animationend', () => {
                // Check if monster touches the player (reaches bottom of the screen)
                const playerBottom = window.innerHeight - 200; // Adjust position of player
                const monsterBottom = monster.getBoundingClientRect().bottom;
                
                if (monsterBottom >= playerBottom) {
                    // Monster touches player, handle game over logic
                    alert('Game Over!');
                    // Remove event listener to prevent further collision checks
                    monster.removeEventListener('animationend', this);
                } else {
                    // Monster reaches bottom without touching player, continue spawning
                    remainingMonsters--;
                    spawnNextMonster();
                }
            });
        }
    }

        spawnNextMonster();
    }