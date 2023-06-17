let tiles = document.querySelectorAll(".item");
let x = 0;
// console.log(tiles[0]);
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener(
    "click",
    function changeImage(e) {
      console.log(tiles[i]);

      const img = document.createElement("img");
      if (x === 0 || x === 2 || x === 4 || x === 6 || x === 8) {
        img.src = "imgs/X.png";
      } else {
        img.src = "imgs/O.png";
      }
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.margin = "0px";
      img.style.padding = "0px";
      tiles[i].appendChild(img);
      x += 1;
      if (
        (x === 0 || x === 2 || x === 4 || x === 6 || x === 8) &&
        tiles[i] === 0
      ) {
        console.log("Image is X");
      }
    },
    { once: true }
  );
}
