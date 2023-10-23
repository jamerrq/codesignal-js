/**
 * Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

solution(n) = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]]
 */

function solution(n) {
  let matrix = Array(n)
    .fill(null)
    .map((_) => Array(n).fill(0))
  let i = 0
  j = 0
  let current = 1
  let dir = 'R' // R -> S -> L -> N
  while (current <= n * n) {
    matrix[i][j] = current
    if (dir === 'R') {
      if (j === n - 1 || matrix[i][j + 1]) {
        dir = 'S'
        i++
      } else {
        j++
      }
    } else if (dir === 'S') {
      if (i === n - 1 || matrix[i + 1][j]) {
        dir = 'L'
        j--
      } else {
        i++
      }
    } else if (dir === 'L') {
      if (j === 0 || matrix[i][j - 1]) {
        dir = 'N'
        i--
      } else {
        j--
      }
    } else {
      if (i === 0 || matrix[i - 1][j]) {
        dir = 'R'
        j++
      } else {
        i--
      }
    }
    current++
  }
  return matrix
}
