/**
 * Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.
 */

function withoutCharAtIndex(number, index) {
  string = String(number)
  return string.slice(0, index).concat(string.slice(index + 1))
}

function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, _, index) => {
      return Math.max(acc, parseInt(withoutCharAtIndex(n, index)))
    }, 0)
}
