export class Player {
    constructor(name, gender, hp, str, level, experience) {
        this.name = name;
        this.gender = gender;
        this.hp = hp;
        this.str = str;
        this.level = level;
        this.experience = experience;
    }

    // Method to attack
    attack(monster) {
        // Simulate attack logic here
        const damage = this.str; // For simplicity, damage is based on player's strength
        monster.takeDamage(damage);
    }

    // Method to take damage
    takeDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.hp = 0; // Ensure hp doesn't go negative
            // Handle player death logic here
            console.log(`${this.name} has been defeated!`);
        }
    }

    // Method to gain experience and level up
    gainExperience(exp) {
        this.experience += exp;
        // Check if player's experience is enough to level up
        if (this.experience >= this.level * 100) { // Example: Level up every 100 experience points
            this.levelUp();
        }
    }

    // Method to level up
    levelUp() {
        this.level++;
        this.experience = 0; // Reset experience to 0 after leveling up
        // Adjust player stats or grant bonuses upon leveling up
        console.log(`${this.name} has leveled up to level ${this.level}!`);
    }

    // Method to display player stats
    displayStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`HP: ${this.hp}`);
        console.log(`Strength: ${this.str}`);
        console.log(`Level: ${this.level}`);
        console.log(`Experience: ${this.experience}`);
    }
}
