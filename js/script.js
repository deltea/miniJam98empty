// The whole game
let game = [
  ["#", "#", "#"],
  ["#", "#", "#"],
  ["#", "#", "#"]
];

// Function to update the game
function updateGame() {
  let gameDiv = document.getElementById("game");
  gameDiv.replaceChildren();
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

updateGame();
