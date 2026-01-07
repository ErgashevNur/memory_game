const numbers = document.getElementById("numbers");
const icons = document.getElementById("icons");

const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const player3 = document.getElementById("player-3");
const player4 = document.getElementById("player-4");

const gridSize4 = document.getElementById("grid-size-4");
const gridSize6 = document.getElementById("grid-size-6");

const submit = document.getElementById("submit");
const gameRule = [];

document.addEventListener("click", (e) => {
  const button = e.target;

  const group = button.dataset.group;

  const buttons = document.querySelectorAll(`[data-group="${group}"]`);

  buttons.forEach((a) => {
    a.style.backgroundColor = "";
  });

  if (button.tagName == "BUTTON" && button.id !== "submit") {
    button.style.backgroundColor = "#304859";
    gameRule.push(button.id);
  }
});

submit.addEventListener("click", () => {
  if (gameRule === "" || gameRule.length === 3) {
    console.log(gameRule);
    console.log("Welcome");
    window.location.href = "gameZone.html";
  } else {
    alert("Iltimos shartlarni berlgilang!");
  }
});
