import { icon4x4, icon6x6 } from "./type/icons.js";
import { number4x4, number6x6 } from "./type/numbers.js";

const newGame = document.getElementById("newGame");
const restartB = document.querySelector(".restart");
const timeEl = document.getElementById("time");
const moviesEl = document.getElementById("movies");
const gameZone = document.querySelector(".gameZone");
const round = document.querySelector(".round");
const morePlayers = document.querySelector(".morePlayers");
const player1 = document.querySelector(".player1");

const gameRule = localStorage.getItem("gameRule").split(",");

newGame.addEventListener("click", () => {
  window.history.back();
});

restartB.addEventListener("click", () => {
  window.location.reload();
});

const findType = gameRule.filter(
  (data) => data == "Numbers" || data == "Icons"
);
const findPlayers = gameRule.filter(
  (data) => data === "1" || data == "2" || data == "3" || data == "4"
);
const findGameSize = gameRule.filter((data) => data === "4x4" || data == "6x6");
const [row, col] = findGameSize[0].split("x");

const repeated = Array(Number(+row)).fill(+col);

if (findType == "Numbers") {
  if (repeated.length === 4) {
    number4x4();
  } else {
    number6x6();
  }
} else {
  if (repeated.length === 4) {
    icon4x4();
  } else {
    icon6x6();
  }
}
