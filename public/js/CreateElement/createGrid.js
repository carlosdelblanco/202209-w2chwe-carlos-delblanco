import CreateElement from "./CreateElement.js";

let cellRow = [];
const grid = [];

function createGrid(gridSize) {
  for (let iIndex = 0; iIndex < gridSize; iIndex++) {
    cellRow = [];
    for (let jIndex = 0; jIndex < gridSize; jIndex++) {
      cellRow[jIndex] = new CreateElement(iIndex, jIndex);
    }
    grid.push(cellRow);
  }
  return grid;
}

export default createGrid;
