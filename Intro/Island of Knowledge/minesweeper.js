/**
 * In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]
 */

function getMinesCount(matrix, i, j) {
  let count = 0
  for (let k = -1; k <= 1; ++k) {
    for (let l = -1; l <= 1; ++l) {
      if (i + k >= 0 && i + k < matrix.length && j + l >= 0 && j + l < matrix[i].length) {
        if (matrix[i + k][j + l]) {
          ++count
        }
      }
    }
  }
  return count - matrix[i][j]
}

function solution(matrix) {
  const result = []
  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(getMinesCount(matrix, i, j))
    }
    result.push(row)
  }
  return result
}
