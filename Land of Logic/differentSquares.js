/**
 * Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
 */

function solution(matrix) {
  let strings = []
  let n = matrix.length;
  let m = matrix.at(0).length;
  for(let i = 0; i < n - 1; ++i){
    for(let j = 0; j < m - 1; ++j){
      strings.push(`${matrix[i][j]}${matrix[i + 1][j]}${matrix[i][j + 1]}${matrix[i + 1][j + 1]}`)
    }
  }
  return [...new Set(strings)].length
}
