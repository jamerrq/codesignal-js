/**
 * Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8
 */

function solution(inputArray, k) {
  let maxSum = inputArray.slice(0, k).reduce((acc, val) => acc + val, 0)
  let current = maxSum
  for (let i = k; i < inputArray.length; ++i) {
    current += inputArray[i]
    current -= inputArray[i - k]
    if (current > maxSum) maxSum = current
  }
  return maxSum
}
