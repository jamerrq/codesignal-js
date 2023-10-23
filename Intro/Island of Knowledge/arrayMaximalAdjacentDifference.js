/**
 * Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.
 */

function solution(inputArray) {
  let ans = Math.abs(inputArray[0] - inputArray[1])
  for (let i = 1; i < inputArray.length - 1; ++i) {
    ans = Math.max(Math.abs(inputArray[i] - inputArray[i + 1]), ans)
  }
  return ans
}
