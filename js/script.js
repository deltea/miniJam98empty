// The whole game
let game = [
  ["#", "#", "#"],
  ["#", "#", "#"],
  ["#", "#", "#"]
];
let playerPos = {
  x: 0,
  y: 0
}

// Function to update the game
function updateGame() {
  let gameDiv = document.getElementById("game");
  gameDiv.replaceChildren();

  game[playerPos.x][playerPos.y] = "@";
  game.forEach(row => {
    row.forEach(character => {
      gameDiv.innerText += character;
    });
    gameDiv.innerText += "\n";
  });
}

// Function to recieve input
function input(key, callback) {
  document.addEventListener("keypress", (event) => {
    if (event.key === key) {
      callback();
    }
  });
}

// All inputs
// Movement
input("ArrowLeft", () => {

});
input("ArrowRight", () => {

});
input("ArrowUp", () => {

});
input("ArrowDown", () => {

});

updateGame();
