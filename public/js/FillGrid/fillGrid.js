// import createGrid from "../CreateElement/createGrid.js";

function fillGrid(grid) {
  grid[1][0].isAlive = true;
  grid[1][1].isAlive = true;
  grid[1][2].isAlive = true;

  return grid;
}

export default fillGrid;
