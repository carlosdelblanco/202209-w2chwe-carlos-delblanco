// import createGrid from "../CreateElement/createGrid.js";

function fillGrid(grid) {
  const newGrid = grid;
  for (let iIndex = 0; iIndex < grid.length; iIndex++) {
    for (let jIndex = 0; jIndex < grid.length; jIndex++) {
      newGrid[iIndex][jIndex].isAlive = Math.round(Math.random());
    }
  }
  return newGrid;
}

export default fillGrid;
