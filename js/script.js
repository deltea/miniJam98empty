// The whole game
let game = [
  ["#", "#", "#"],
  ["#", "#", "#"],
  ["#", "#", "#"]
];

// Function to update the game
function updateGame() {
  let gameDiv = document.getElementById("game");
  game.forEach(row => {
    row.forEach(character => {
      gameDiv.innerText += character;
    });
    gameDiv.innerText += "\n";
  });
}
updateGame();
