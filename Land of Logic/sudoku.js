/**
 * Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For
grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
the output should be
solution(grid) = true;

For
grid = [[8, 3, 6, 5, 3, 6, 7, 2, 9],
        [4, 2, 5, 8, 7, 9, 3, 8, 1],
        [7, 9, 1, 2, 1, 4, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
the output should be
solution(grid) = false.

The output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.
 */

function checkGroup(group) {
  return [...new Set(group)].length === 9
}

function solution(grid) {
  let n = grid.length
  let checkRows = grid.every((row) => checkGroup(row))
  let cols = grid.map((_, index, M) => {
    return M.reduce((acc, val) => {
      acc.push(val[index])
      return acc
    }, [])
  })
  let checkCols = cols.every((col) => checkGroup(col))
  let squares = []
  for (let i = 0; i < n; i += 3) {
    for (let j = 0; j < n; j += 3) {
      let square = []
      for (let sI = i; sI < i + 3; ++sI) {
        for (let sJ = j; sJ < j + 3; ++sJ) square.push(grid[sI][sJ])
      }
      squares.push(square)
    }
  }
  let checkSquares = squares.every(square => checkGroup(square))
  return checkRows && checkCols && checkSquares
}
