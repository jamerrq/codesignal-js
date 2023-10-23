/**
 * Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be
solution(n) = 0;
For n = 100, the output should be
solution(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
solution(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
 */

function reduceString(s) {
  return String(s).split('').reduce((acc, val) => {
    return acc + parseInt(val)
  }, 0)
}

function solution(n) {
  let steps = 0
  while (parseInt(n) % 10 != parseInt(n)) {
    n = parseInt(reduceString(n))
    steps++
  }
  return steps
}
