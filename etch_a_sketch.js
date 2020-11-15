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

setInitial();
let containerArray = Array.from(document.querySelectorAll(".single-block"));

//adding the class default_hover to each element of of the container
containerArray.forEach((cont) => {
  cont.addEventListener("mouseenter", () => {
    cont.classList.add("default_hover");
  });
});

//RESET
function reset() {
  containerArray.forEach((cont) => {
    cont.style.backgroundColor = "";
    cont.setAttribute("class", "single-block");
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
  containerArray.forEach((cont) => {
    cont.addEventListener("mouseenter", () => {
      cont.classList.add("default_hover");
    });
  });
  // console.log(containerArray);
}

/// DIFFERENT COLORS

// RANDOM
function randomColor() {
  reset();
  containerArray.forEach((cont) => {
    cont.addEventListener("mouseenter", () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      cont.style.backgroundColor = `#${randomColor}`;
    });
  });
}

// BLACK
function blackColor() {
  reset();
  containerArray.forEach((cont) => {
    cont.addEventListener("mouseenter", () => {
      cont.style.backgroundColor = "";
    });
  });
}

// e.classList.add("default_hover");

// grid.addEventListener('mouseenter', func) { (when mouse hovers over item
//
//}
