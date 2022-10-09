// import createGrid from "../CreateElement/createGrid.js";

function fillGrid(grid) {
  const newGrid = grid;
  newGrid[1][0].isAlive = true;
  newGrid[1][1].isAlive = true;
  newGrid[1][2].isAlive = true;

  return newGrid;
}

export default fillGrid;
