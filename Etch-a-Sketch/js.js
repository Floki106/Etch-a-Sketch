const container = document.getElementById("container");
const newGridBtn = document.getElementById("button");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");

let currentColor = "#3f51b5";
let rainbowMode = false;
let gridSize = 50;

function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = rainbowMode
        ? `hsl(${Math.random() * 360}, 100%, 50%)`
        : currentColor;
    });

    container.appendChild(square);
  }
}

newGridBtn.addEventListener("click", () => {
  let size = prompt("Enter new grid size (max 100):");
  if (size !== null && size > 0 && size <= 100) {
    gridSize = size;
    createGrid(size);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

colorBtn.addEventListener("click", () => {
  rainbowMode = false;
  currentColor =
    prompt("Enter any CSS color (e.g., red, #f00, rgb(255,0,0)):", "#3f51b5") ||
    "#3f51b5";
});

rainbowBtn.addEventListener("click", () => {
  rainbowMode = true;
});

createGrid(gridSize);
