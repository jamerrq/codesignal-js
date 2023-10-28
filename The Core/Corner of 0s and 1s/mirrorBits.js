/**
 * Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
solution(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
solution(a) = 1.
 */

function solution(a) {
  return parseInt([...a.toString(2)].reverse().join(''), 2)
}
