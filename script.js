const container = document.getElementById("container");
const changeGridBtn = document.getElementById("changeGridBtn");

function getRandomColor() {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    const num = Math.floor(Math.random() * 255);
    rgb.push(num);
  }

  return `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})`;
}

function decreaseOpacity(element) {
  if (element.style.opacity === '') {
    element.style.opacity = 1;
  } else if (element.style.opacity > 0) {
    element.style.opacity -= 0.1;
  }
}

function draw(element) {
  const backgroundColor = element.style.backgroundColor;

  if (backgroundColor === '') {
    element.style.backgroundColor = getRandomColor();
  } else {
    decreaseOpacity(element);
  }
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseenter", () => { draw(square) });

      row.appendChild(square);
    }
  }
}

function clearGrid() {
  container.innerHTML = '';
}

function changeGrid() {
  const newGridSize = +prompt("Which grid size do you want?");

  if (isNaN(newGridSize)) {
    alert("The requested grid size, is not a number!");
    return;
  } else if (newGridSize > 100) {
    alert("The requested grid size, is too big.\nThe number must be less than 100.");
    return;
  } else if (newGridSize < 1) {
    alert("The requested grid size, is too low.\nThe number must be more than 1.");
    return;
  }

  clearGrid();
  createGrid(newGridSize);
}

changeGridBtn.addEventListener("click", changeGrid);

createGrid(16);
