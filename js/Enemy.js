// Enemy class
class Enemy {
  constructor(character, health, damage, game) {
    this.character = character;
    this.health = health;
    this.damage = damage;
    this.game = game;

    // Put in game
    let random1 = Math.floor(Math.random() * game.length);
    let random2 = Math.floor(Math.random() * game[random1]);
    game[random1][random2] = this.character;
  }
  get game() {
    return this.game;
  }
}
