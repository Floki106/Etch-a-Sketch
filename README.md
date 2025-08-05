# Etch-a-Sketch Pseudocode

- Create a grid container `<div>`.
- Add buttons: Clear, Erase, Set Size, Rainbow.
- Add inputs: Color picker and Grid size.

- Set default grid size (e.g. 16x16).

- Function `createGridSize(size)`:
  - Clear the grid.
  - Set grid layout with `size` rows and columns.
  - Create `size × size` cells.
  - Add event listeners to cells for coloring.

- When a cell is hovered or clicked:
  - If Rainbow mode on, color cell with random color.
  - If Erase mode on, color cell white.
  - Else, color cell with selected color.

- Clear button clears all cells.
- Set Size button creates a new grid.
- Erase button turns on erase mode.
- Rainbow button turns on rainbow mode.
- Color picker sets drawing color.
