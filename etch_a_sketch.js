let container = document.querySelector("#container");
// let grid = document.createElement("div");

let size = document.querySelector("#size");
size.addEventListener("click", resize);

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

setInitial();
let containerArray = Array.from(document.querySelectorAll(".single-block"));

//adding the class hovering to each element of of the container
containerArray.forEach((cont) => {
  cont.addEventListener("mouseenter", () => {
    cont.classList.add("hovering");
  });
});

//RESET
function reset() {
  containerArray.forEach((cont) => {
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
      cont.classList.add("hovering");
    });
  });
  // console.log(containerArray);
}

// console.log(containerArray);

// e.classList.add("hovering");

// grid.addEventListener('mouseenter', func) { (when mouse hovers over item
//
//}
