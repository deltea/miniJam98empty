// Enemy class
class Enemy {
  constructor(character, health, damage, game, pos) {
    this.character = character;
    this.health = health;
    this.damage = damage;
    this.game = game;
    this.pos = pos;

    // Put in game
    this.game[this.pos.y][this.pos.x] = this.character;
  }
}
