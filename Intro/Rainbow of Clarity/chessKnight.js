/**
 * Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
solution(cell) = 2.



For cell = "c2", the output should be
solution(cell) = 6.
 */

function solution(cell) {
  let abc = 'abcdefgh';
  let dpPath = [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];
  let [col, row] = cell.split('');
  let ans = 0;
  for (let path of dpPath) {
    let [i, j] = path
    let newCol =
      abc[abc.indexOf(col) + i];
      let newRow = parseInt(row) + j;
      if (newRow > 0 && newCol && newRow < 9) {
        console.log(newRow, newCol);
        ans++;
      }
  }
  return ans;
}
