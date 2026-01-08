const newGame = document.getElementById("newGame");
const gameZone = document.querySelector(".gameZone");
const round = document.querySelector(".round");
const morePlayers = document.querySelector(".morePlayers");
const player1 = document.querySelector(".player1");

const gameRule = localStorage.getItem("gameRule").split(",");

newGame.addEventListener("click", () => {
  window.history.back();
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

if (repeated.length == 4) {
  for (let i = 1; i <= 16; i++) {
    gameZone.style.gridTemplateColumns = "repeat(4, 1fr)";
    gameZone.style.gridTemplateRows = "repeat(4, 1fr)";
    gameZone.style.marginTop = "105px";
    gameZone.style.marginBottom = "126px";

    gameZone.innerHTML += `<span class="round" style="width:118px; height:118px;"></span>`;
  }
} else {
  for (let i = 1; i <= 36; i++) {
    gameZone.style.gridTemplateColumns = "repeat(6, 1fr)";
    gameZone.style.gridTemplateRows = "repeat(6, 1fr)";
    gameZone.style.marginTop = "85px";
    gameZone.style.marginBottom = "102px";

    gameZone.innerHTML += `<span class="round" style="width:82px; height:82px;"></span>`;
  }
}

if (+findPlayers === 2 || +findPlayers === 3 || +findPlayers === 4) {
  for (let i = 1; i <= +findPlayers; i++) {
    morePlayers.style.display = "flex";
    morePlayers.innerHTML += ` 
    <div class="timeBox">
    <span style="color: #7191a5; font-size: 18px">Player ${i}</span>
    <span style="color: #304859; font-size: 32px">0</span>
    </div>`;
  }
} else if (+findPlayers === 1) {
  player1.style.display = "flex";
}
