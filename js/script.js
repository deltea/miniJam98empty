// The whole game
let game = [
  ["#", "#", "#"],
  ["#", "#", "#"],
  ["#", "#", "#"]
];
let playerPos = {
  x: 0,
  y: 0
};

// Function to update the game
function updateGame() {
  let gameDiv = document.getElementById("game");
  gameDiv.innerText = "";

  for (var x = 0; x < game.length; x++) {
    for (var i = 0; i < game[x].length; i++) {
      if (game[x][i] === "@") {
        game[x][i] = "#";
      }
    }
  }
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

updateGame();
// All inputs
// Movement
input("ArrowLeft", () => {
  if (playerPos.x > 0) {
    playerPos.x--;
    updateGame();
  }
});
input("ArrowRight", () => {
  if (playerPos.x < game[0].length - 1) {
    playerPos.x++;
    updateGame();
  }
});
input("ArrowUp", () => {
  if (playerPos.y > 0) {
    playerPos.y--;
    updateGame();
  }
});
input("ArrowDown", () => {
  if (playerPos.y < game.length - 1) {
    playerPos.y++;
    updateGame();
  }
});
