const newGame = document.getElementById("newGame");

newGame.addEventListener("click", () => {
  window.history.back();
  console.log("New Game");
});
