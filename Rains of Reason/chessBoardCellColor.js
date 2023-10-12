/**
 * Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.
 */

function solution(cell1, cell2) {
  let sum1 = cell1[0].charCodeAt(0) + parseInt(cell1[1])
  let sum2 = cell2[0].charCodeAt(0) + parseInt(cell2[1])
  return sum1 % 2 === sum2 % 2
}
