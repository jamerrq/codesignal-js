/**
 * You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3
 */

function solution(inputArray) {
  let prev = inputArray[0]
  let ans = 0
  for (let i = 1; i < inputArray.length; ++i) {
    if (inputArray[i] <= prev) {
      ans += (prev + 1 - inputArray[i])
      inputArray[i] = prev + 1
    }
    prev = inputArray[i]
  }
  return ans
}
