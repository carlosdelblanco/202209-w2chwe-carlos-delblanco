import CreateElement from "./CreateElement.js";
import createGrid from "./createGrid.js";

describe("Given the createGrid function", () => {
  describe("When it gets the parameter 4", () => {
    test("Then it should create a four-by-four array [0,0], [0,1], [0,2], [0,3], [1,0], [1,1], [1,2], [1,3], [2,0], [2,1], [2,2], [2,3], [3,0], [3,1], [3,2], [3,3] ", () => {
      const gridSize = 4;
      const expectedArray4by4 = [
        [
          new CreateElement(0, 0),
          new CreateElement(0, 1),
          new CreateElement(0, 2),
          new CreateElement(0, 3),
        ],
        [
          new CreateElement(1, 0),
          new CreateElement(1, 1),
          new CreateElement(1, 2),
          new CreateElement(1, 3),
        ],
        [
          new CreateElement(2, 0),
          new CreateElement(2, 1),
          new CreateElement(2, 2),
          new CreateElement(2, 3),
        ],
        [
          new CreateElement(3, 0),
          new CreateElement(3, 1),
          new CreateElement(3, 2),
          new CreateElement(3, 3),
        ],
      ];

      const output = createGrid(gridSize);

      expect(output).toStrictEqual(expectedArray4by4);
    });
  });
});
