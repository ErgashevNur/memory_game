function number4x4() {
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

  let randomNum = 0;
  const randomNums = [];

  for (let i = 1; i <= 8; i++) {
    randomNum = Math.random();
    randomNums.push(Math.floor(Math.random() * 99) + 1);
  }

  const copyNum = [...randomNums];

  function shaflNums(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shaflNums(copyNum);
  const finalArray = [...randomNums, ...copyNum];

  for (let i = 1; i <= 16; i++) {
    gameZone.style.gridTemplateColumns = "repeat(4, 1fr)";
    gameZone.style.gridTemplateRows = "repeat(4, 1fr)";
    gameZone.style.marginTop = "105px";
    gameZone.style.marginBottom = "126px";
    let numConst = "";
    let idNum = 0;
    finalArray.map((num) => {
      numConst += `<span id="${(idNum += 1)}" class="round" style="width:118px; height:118px;">${num}</span>`;
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
    const button = e.target;

    if (button.tagName === "SPAN") {
      if (button.style.backgroundColor === "rgb(253, 162, 20)") {
        button.style.backgroundColor = "#152938";
        button.style.color = "#152938";
      } else {
        button.style.backgroundColor = "#FDA214";
        button.style.color = "#FCFCFC";
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
      if (button.tagName === "SPAN") {
        buttonSelectedCount += 1;
        if (button.tagName === "SPAN") {
          check.push(button.textContent);
          checkEl.push(button);
          checkValue.push(button.textContent);
        }

        if (buttonSelectedCount == 2) {
          checkEl.map((elId) => {
            if (checkValue[0] === checkValue[1]) {
              console.log("Ikkala son ham togri");
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                elId.style.backgroundColor = "#BCCED9";
              }, 500);
            } else {
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                elId.style.backgroundColor = "#152938";
                elId.style.color = "#152938";
              }, 500);
            }
          });
        }
      } else {
        console.log("span bosing");
      }
    });
    moves += 1;
    moviesEl.textContent = moves;
  }

  button1();

  let seconds = 0;
  let intervalId;
  let totalSeconds = 0; // boshlanish 0:00

  intervalId = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) seconds = "0" + seconds; // 0:01 formatiga keltirish

    timeEl.textContent = `${minutes}:${seconds}`;

    totalSeconds++; // har sekundda oshirish
  }, 1000);

  // Timerni to'xtatish
  // clearInterval(intervalId);
}

function number6x6() {
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

  let randomNum = 0;
  const randomNums = [];

  for (let i = 1; i <= 18; i++) {
    randomNum = Math.random();
    randomNums.push(Math.floor(Math.random() * 99) + 1);
  }

  const copyNum = [...randomNums];

  function shaflNums(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shaflNums(copyNum);
  const finalArray = [...randomNums, ...copyNum];

  for (let i = 1; i <= 16; i++) {
    gameZone.style.gridTemplateColumns = "repeat(6, 1fr)";
    gameZone.style.gridTemplateRows = "repeat(6, 1fr)";
    gameZone.style.marginTop = "85px";
    gameZone.style.marginBottom = "102px";
    let numConst = "";
    let idNum = 0;
    finalArray.map((num) => {
      numConst += `<span id="${(idNum += 1)}" class="round" style="width:82px; height:82px; font-size: 44px;">${num}</span>`;
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
    const button = e.target;

    if (button.tagName === "SPAN") {
      if (button.style.backgroundColor === "rgb(253, 162, 20)") {
        button.style.backgroundColor = "#152938";
        button.style.color = "#152938";
      } else {
        button.style.backgroundColor = "#FDA214";
        button.style.color = "#FCFCFC";
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
      if (button.tagName === "SPAN") {
        buttonSelectedCount += 1;
        if (button.tagName === "SPAN") {
          check.push(button.textContent);
          checkEl.push(button);
          checkValue.push(button.textContent);
        }

        if (buttonSelectedCount == 2) {
          checkEl.map((elId) => {
            if (checkValue[0] === checkValue[1]) {
              console.log("Ikkala son ham togri");
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                elId.style.backgroundColor = "#BCCED9";
              }, 500);
            } else {
              setTimeout(() => {
                buttonSelectedCount = 0;
                check.length = 0;
                checkEl.length = 0;
                checkValue.length = 0;

                elId.style.backgroundColor = "#152938";
                elId.style.color = "#152938";
              }, 500);
            }
          });
        }
      } else {
        console.log("span bosing");
      }
    });
    moves += 1;
    moviesEl.textContent = moves;
  }

  button1();

  let seconds = 0;
  let intervalId;
  let totalSeconds = 0; // boshlanish 0:00

  intervalId = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) seconds = "0" + seconds; // 0:01 formatiga keltirish

    timeEl.textContent = `${minutes}:${seconds}`;

    totalSeconds++; // har sekundda oshirish
  }, 1000);

  // Timerni to'xtatish
  // clearInterval(intervalId);
}
export { number4x4, number6x6 };
