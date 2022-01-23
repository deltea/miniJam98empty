// Enemy class
class Enemy {
  constructor(character, health, damage, game, x, y) {
    this.character = character;
    this.health = health;
    this.damage = damage;
    this.game = game;
    this.x = x;
    this.y = y;

    // Put in game
    this.game[this.y][this.x] = this.character;
  }
}
