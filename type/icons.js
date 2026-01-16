// 4x4
function icon4x4() {
  const timeEl = document.getElementById("time");
  const moviesEl = document.getElementById("movies");
  const gameZone = document.querySelector(".gameZone");
  const morePlayers = document.querySelector(".morePlayers");
  const player1 = document.querySelector(".player1");

  const gameRule = localStorage.getItem("gameRule").split(",");

  const findPlayers = gameRule.filter(
    (data) => data === "1" || data == "2" || data == "3" || data == "4"
  );
  const findGameSize = gameRule.filter(
    (data) => data === "4x4" || data == "6x6"
  );
  const [row, col] = findGameSize[0].split("x");
  const repeated = Array(Number(+row)).fill(+col);

  const images = [
    "anchor.png",
    "bug.png",
    "car.png",
    "flask.png",
    "futbol.png",
    "hand-spock.png",
    "lira-sign.png",
    "moon.png",
  ];

  let randomImgs = [];

  for (let i = 1; i <= 8; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImgs.push(images[randomIndex]);
  }

  const copyImgs = [...randomImgs];

  function shaflNums(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shaflNums(copyImgs);
  const finalArray = [...randomImgs, ...copyImgs];

  for (let i = 1; i <= 16; i++) {
    gameZone.style.gridTemplateColumns = "repeat(4, 1fr)";
    gameZone.style.gridTemplateRows = "repeat(4, 1fr)";
    gameZone.style.marginTop = "105px";
    gameZone.style.marginBottom = "126px";
    let numConst = "";
    let idNum = 0;

    finalArray.map((img) => {
      const dataGroup = img.split(".")[0];

      numConst += `
    <span id="${(idNum += 1)}" data-name="${dataGroup}" class="round" style="width:118px; height:118px;">
      <img src="./images/${img}" data-name="${dataGroup}" style="width: 56px; height:56px; opacity: 0; object-fit:cover;">
    </span>`;
    });

    gameZone.innerHTML = numConst;
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

  document.addEventListener("click", (e) => {
    let button = e.target;

    // Agar IMG bosilsa → SPANga o‘tamiz
    if (button.tagName === "IMG") {
      button = button.parentElement;
    }

    // Faqat SPAN bilan ishlaymiz
    if (button.tagName === "SPAN") {
      const img = button; // ichidagi IMG

      if (button.style.backgroundColor === "rgb(253, 162, 20)") {
        // YOPILGAN HOLAT
        button.style.backgroundColor = "#152938";
        img.children[0].style.opacity = 0;
      } else {
        // OCHILGAN HOLAT
        button.style.backgroundColor = "#FDA214";
        img.children[0].style.opacity = 1;
      }
    }
  });

  let buttonSelectedCount = 0;
  let moves = 0;
  const check = [];
  const checkEl = [];
  const checkValue = [];

  function button1() {
    document.addEventListener("click", (e) => {
      const button = e.target;
      if (button.tagName === "SPAN" || button.tagName === "IMG") {
        buttonSelectedCount += 1;
        if (button.tagName === "SPAN" || button.tagName === "IMG") {
          check.push(button.textContent);
          checkEl.push(button);
          checkValue.push(button.dataset.name);
        }

        if (buttonSelectedCount == 2) {
          checkEl.map((elId) => {
            if (checkValue[0] === checkValue[1]) {
              console.log("Ikkala icon ham togri");
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                if (elId.tagName === "IMG") {
                  elId.parentElement.style.backgroundColor = "#BCCED9";
                  elId.style.opacity = 1;
                } else {
                  elId.style.backgroundColor = "#BCCED9";
                  elId.children[0].style.opacity = 1;
                }
              }, 500);
            } else {
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                console.log(elId.tagName === "IMG");

                if (elId.tagName === "IMG") {
                  elId.parentElement.style.backgroundColor = "#152938";
                  elId.style.opacity = 0;
                } else {
                  elId.style.backgroundColor = "#152938";
                  elId.children[0].style.opacity = 0;
                }

                console.log(elId);
              }, 500);
            }
          });
        }
      } else {
        // console.log("span bosing");
      }
    });
    moves += 1;
    moviesEl.textContent = moves;
  }

  button1();

  let seconds = 0;
  let intervalId;
  let totalSeconds = 0;

  intervalId = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) seconds = "0" + seconds;

    timeEl.textContent = `${minutes}:${seconds}`;

    totalSeconds++;
  }, 1000);

  // Timerni to'xtatish
  // clearInterval(intervalId);
}

function icon6x6() {
  const timeEl = document.getElementById("time");
  const moviesEl = document.getElementById("movies");
  const gameZone = document.querySelector(".gameZone");
  const round = document.querySelector(".round");
  const morePlayers = document.querySelector(".morePlayers");
  const player1 = document.querySelector(".player1");

  const gameRule = localStorage.getItem("gameRule").split(",");

  const findPlayers = gameRule.filter(
    (data) => data === "1" || data == "2" || data == "3" || data == "4"
  );
  const findGameSize = gameRule.filter(
    (data) => data === "4x4" || data == "6x6"
  );
  const [row, col] = findGameSize[0].split("x");
  const repeated = Array(Number(+row)).fill(+col);

  const images = [
    "anchor.png",
    "bug.png",
    "car.png",
    "flask.png",
    "futbol.png",
    "hand-spock.png",
    "lira-sign.png",
    "moon.png",
    "snowflake.png",
    "sun.png",
  ];

  let randomImgs = [];

  for (let i = 1; i <= 18; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImgs.push(images[randomIndex]);
  }

  const copyImgs = [...randomImgs];

  function shaflNums(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shaflNums(copyImgs);
  const finalArray = [...randomImgs, ...copyImgs];

  for (let i = 1; i <= 36; i++) {
    gameZone.style.gridTemplateColumns = "repeat(6, 1fr)";
    gameZone.style.gridTemplateRows = "repeat(6, 1fr)";
    gameZone.style.marginTop = "85px";
    gameZone.style.marginBottom = "102px";
    let numConst = "";
    let idNum = 0;

    finalArray.map((img) => {
      const dataGroup = img.split(".")[0];

      numConst += `
        <span id="${(idNum += 1)}" data-name="${dataGroup}" class="round" style="width:82px; height:82px;">
         <img src="./images/${img}" data-name="${dataGroup}" style="width: 56px; height:56px; opacity: 0; object-fit:cover;">
        </span>`;
    });

    gameZone.innerHTML = numConst;
  }

  // Playerlar soni
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

  document.addEventListener("click", (e) => {
    let button = e.target;

    // Agar IMG bosilsa → SPANga o‘tamiz
    if (button.tagName === "IMG") {
      button = button.parentElement;
    }

    // Faqat SPAN bilan ishlaymiz
    if (button.tagName === "SPAN") {
      const img = button; // ichidagi IMG

      if (button.style.backgroundColor === "rgb(253, 162, 20)") {
        // YOPILGAN HOLAT
        button.style.backgroundColor = "#152938";
        img.children[0].style.opacity = 0;
      } else {
        // OCHILGAN HOLAT
        button.style.backgroundColor = "#FDA214";
        img.children[0].style.opacity = 1;
      }
    }
  });

  let buttonSelectedCount = 0;
  let moves = 0;
  const check = [];
  const checkEl = [];
  const checkValue = [];

  function button1() {
    document.addEventListener("click", (e) => {
      const button = e.target;

      if (button.tagName === "SPAN" || button.tagName === "IMG") {
        buttonSelectedCount += 1;
        if (button.tagName === "SPAN" || button.tagName === "IMG") {
          check.push(button.textContent);
          checkEl.push(button);

          checkValue.push(button.dataset.name);
        }

        if (buttonSelectedCount == 2) {
          checkEl.map((elId) => {
            if (checkValue[0] === checkValue[1]) {
              console.log("Ikkala icon ham togri");
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                if (elId.tagName === "IMG") {
                  elId.parentElement.style.backgroundColor = "#BCCED9";
                  elId.style.opacity = 1;
                } else {
                  elId.style.backgroundColor = "#BCCED9";
                  elId.children[0].style.opacity = 1;
                }
              }, 500);
            } else {
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                console.log(elId.tagName === "IMG");

                if (elId.tagName === "IMG") {
                  elId.parentElement.style.backgroundColor = "#152938";
                  elId.style.opacity = 0;
                } else {
                  elId.style.backgroundColor = "#152938";
                  elId.children[0].style.opacity = 0;
                }

                console.log(elId);
              }, 500);
            }
          });
        }
      } else {
        // console.log("span bosing");
      }
    });
    moves += 1;
    moviesEl.textContent = moves;
  }

  button1();

  let seconds = 0;
  let intervalId;
  let totalSeconds = 0;

  intervalId = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) seconds = "0" + seconds;

    timeEl.textContent = `${minutes}:${seconds}`;

    totalSeconds++;
  }, 1000);

  // Timerni to'xtatish
  // clearInterval(intervalId);
}

export { icon4x4, icon6x6 };
