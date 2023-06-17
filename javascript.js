let tiles = document.querySelectorAll(".item");
const div1 = document.getElementById("1");
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");
const div4 = document.getElementById("4");
const div5 = document.getElementById("5");
const div6 = document.getElementById("6");
const div7 = document.getElementById("7");
const div8 = document.getElementById("8");
const div9 = document.getElementById("9");
let isX = true;
let move = 0;
const winner = document.getElementsByClassName("winner");
function stopGame() {
  tiles.forEach((tile) => {
    tile.removeEventListener("click", changeImage);
  });
}
function changeImage(e) {
  move++;

  if (isX) {
    e.target.innerText = "X";
  } else {
    e.target.innerText = "O";
  }
  isX = !isX;

  if (
    div1.innerText === "X" &&
    div2.innerText === "X" &&
    div3.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div4.innerText === "X" &&
    div5.innerText === "X" &&
    div6.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div7.innerText === "X" &&
    div8.innerText === "X" &&
    div9.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div1.innerText === "X" &&
    div4.innerText === "X" &&
    div7.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div2.innerText === "X" &&
    div5.innerText === "X" &&
    div8.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div3.innerText === "X" &&
    div6.innerText === "X" &&
    div9.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div1.innerText === "X" &&
    div5.innerText === "X" &&
    div9.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div3.innerText === "X" &&
    div5.innerText === "X" &&
    div7.innerText === "X"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "X is winner";
    stopGame();
  } else if (
    div1.innerText === "O" &&
    div2.innerText === "O" &&
    div3.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (
    div4.innerText === "O" &&
    div5.innerText === "O" &&
    div6.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (
    div7.innerText === "O" &&
    div8.innerText === "O" &&
    div9.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (
    div1.innerText === "O" &&
    div4.innerText === "O" &&
    div7.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (
    div2.innerText === "O" &&
    div5.innerText === "O" &&
    div8.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (
    div3.innerText === "O" &&
    div6.innerText === "O" &&
    div9.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (
    div1.innerText === "O" &&
    div5.innerText === "O" &&
    div9.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (
    div3.innerText === "O" &&
    div5.innerText === "O" &&
    div7.innerText === "O"
  ) {
    winner[0].style.display = "block";
    winner[0].innerText = "O is winner";
    stopGame();
  } else if (move >= 9) {
    winner[0].style.display = "block";
    winner[0].innerText = "Its a Draw";
    // stopGame()
  }
  // img.style.width = "100%";
  // img.style.height = "100%";
  // img.style.margin = "0px";
  // img.style.padding = "0px";
  // tiles[i].appendChild(img);
  // if (
  //   x === 0 &&
  //   tiles[i] === div1
  //   // (x === 0 || x === 2 || x === 4 || x === 6 || x === 8) &&
  // ) {
  //   if (x === 0 && tiles[i] === div1) {
  //     console.log("Winner D1");
  //   }
  //   console.log("Winner D1");
  // }
}
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", changeImage, { once: true });
}
