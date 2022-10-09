// import createGrid from "../CreateElement/createGrid.js";

function fillGrid(grid) {
  const newGrid = grid;
  for (let iIndex = 0; iIndex < grid.length; iIndex++) {
    for (let jIndex = 0; jIndex < grid.length; jIndex++) {
      const randomCellStatus = Math.round(Math.random());
      let cellStatus = false;
      if (randomCellStatus === 1) {
        cellStatus = true;
      }
      newGrid[iIndex][jIndex].isAlive = cellStatus;
    }
  }
  return newGrid;
}

export default fillGrid;
