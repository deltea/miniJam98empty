// The whole game
let game = [];
let proportions = {
  width: 10,
  height: 10
};
let characters = {
  dirt: "#",
  nothing: " ",
  player: "@",
  monster: "$"
};
let playerPos = {
  x: 0,
  y: 0
};
let enemies = [{
  health: 10,
  damage: 1,
  pos: {
    x: 9,
    y: 9
  }
}];

// Function to update the game
function updateGame() {
  let gameDiv = document.getElementById("game");
  gameDiv.innerText = "";

  // Fill the board
  game = [];
  for (var i = 0; i < proportions.height; i++) {
    let row = [];
    for (var x = 0; x < proportions.width; x++) {
      row.push(characters.dirt);
    }
    game.push(row);
  }

  enemies.forEach(enemy => {
    new Enemy(characters.monster, enemy.health, enemy.damage, game, enemy.pos);
  });
  game[playerPos.y][playerPos.x] = "@";

  game.forEach(row => {
    row.forEach(character => {
      gameDiv.innerText += character;
    });
    gameDiv.innerText += "\n";
  });
}

// Function to recieve input
function input(key, callback) {
  document.addEventListener("keydown", (event) => {
    if (event.key === key) {
      callback();
    }
  });
}

// Move a enemy
function moveEnemy(enemy) {
  if (playerPos.x > enemy.pos.x) {
    enemy.pos.x++;
  } else if (playerPos.x < enemy.pos.x) {
    enemy.pos.x--;
  }
  if (playerPos.y > enemy.pos.y) {
    enemy.pos.y++;
  } else if (playerPos.y < enemy.pos.y) {
    enemy.pos.y--;
  }
}

// Function to check if the player is touching something
function touching(x, y, game) {
  return game[y][x];
}

// Move the player
function move(direction) {
  switch (direction) {
    case "left":
      playerPos.x--;
      break;
    case "right":
      playerPos.x++;
      break;
    case "up":
      playerPos.y--;
      break;
    case "down":
      playerPos.y++;
      break;
  }
}

updateGame();
// All inputs
// Movement
input("ArrowLeft", () => {
  if (playerPos.x > 0) {
    move("left");
    enemies.forEach(enemy => {
      moveEnemy(enemy);
      updateGame();
    });
  }
});
input("ArrowRight", () => {
  if (playerPos.x < game[0].length - 1) {
    move("right");
    enemies.forEach(enemy => {
      moveEnemy(enemy);
      updateGame();
    });
  }
});
input("ArrowUp", () => {
  if (playerPos.y > 0) {
    move("up");
    enemies.forEach(enemy => {
      moveEnemy(enemy);
      updateGame();
    });
  }
});
input("ArrowDown", () => {
  if (playerPos.y < game.length - 1) {
    move("down");
    enemies.forEach(enemy => {
      moveEnemy(enemy);
      updateGame();
    });
  }
});
