/**
 * Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to
diagonal movement. Check out the example below to see how it can move:

Example

For bishop = "a1" and pawn = "c3", the output should be
solution(bishop, pawn) = true.

For bishop = "h1" and pawn = "h3", the output should be
solution(bishop, pawn) = false.
 */

// function solution(bishop, pawn) {
//   let bishopX = bishop.charCodeAt(0)
//   let bishopY = parseInt(bishop[1])
//   let pawnX = pawn.charCodeAt(0)
//   let pawnY = parseInt(pawn[1])
//   return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY)
// }

function mapLetter(ch) {
  switch (ch) {
    case 'a':
      return 1
    case 'b':
      return 2
    case 'c':
      return 3
    case 'd':
      return 4
    case 'e':
      return 5
    case 'f':
      return 6
    case 'g':
      return 7
    case 'h':
      return 8
    default:
      return 'guarro'
  }
}

function solution(bishop, pawn) {
  let rowDistance = Math.abs(+pawn[1] - bishop[1])
  let colDistance = Math.abs(mapLetter(pawn[0]) - mapLetter(bishop[0]))
  return rowDistance === colDistance
}
