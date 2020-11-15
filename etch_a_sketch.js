let container = document.querySelector("#container");
// let grid = document.createElement("div");

let size = document.querySelector("#size");
size.addEventListener("click", resize);

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

let rndColorButton = document.querySelector("#rndColor");
rndColorButton.addEventListener("click", randomColor);

let blackColorButton = document.querySelector("#blackColor");
blackColorButton.addEventListener("click", blackColor);

let grayscalesColorButton = document.querySelector("#grayscales");
grayscalesColorButton.addEventListener("click", grayscales);

setInitial();
let containerArray = Array.from(document.querySelectorAll(".single-block"));
//set default black
blackColor();

//RESET
function reset() {
  containerArray.forEach((cont) => {
    cont.setAttribute("class", "single-block");
    cont.style.backgroundColor = "";
    cont.style.opacity = "";
  });
}

// create 16x16 blocks
function setInitial() {
  for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.classList.add("single-block");
    container.appendChild(grid);
  }
}

function resize() {
  let newSize = prompt("Which size do you want?");
  containerArray.forEach((cont) => {
    cont.remove();
  });
  container.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;

  for (let i = 0; i < newSize * newSize; i++) {
    grid = document.createElement("div");
    grid.classList.add("single-block");
    container.appendChild(grid);
  }

  containerArray = Array.from(document.querySelectorAll(".single-block"));
  blackColor();
}

/// DIFFERENT COLORS

function colorSetter(color) {
  switch (true) {
    case color === "black":
      containerArray.forEach((cont) => {
        cont.addEventListener("mouseenter", () => {
          cont.style.backgroundColor = "rgba(0, 0, 0, 1)";
        });
      });
      break;
    case color === "random":
      containerArray.forEach((cont) => {
        cont.addEventListener("mouseenter", () => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          cont.style.backgroundColor = `#${randomColor}`;
        });
      });
      break;
    // case color === "grayscales":
    //   console.log("Im in");
    //   containerArray.forEach((cont) => {
    //     cont.addEventListener("mouseenter", () => {
    //       cont.style.opacity = "0.1";
    //     });
    //   });
    //   break;
  }
}

// RANDOM
function randomColor() {
  reset();
  colorSetter("random");
}

// BLACK
function blackColor() {
  reset();
  colorSetter("black");
}

// GRAYSCALES;
// function grayscales() {
//   reset();
//   // colorSetter("grayscales");
//   // rgba(0,0,0,0.1) -> light gray

//   containerArray.forEach((cont) => {
//     cont.addEventListener("mouseenter", () => {
//       let currentColor = cont.style.backgroundColor;
//       if (currentColor !== "rgba(0, 0, 0, 0.1)") {
//         cont.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
//       }

//       console.log(currentColor);
//       let currentOpacity = currentColor.slice(16, -1);

//       // else if (currentColor === "rgba(0,0,0,0.1)") {
//       // }
//     });
//   });
