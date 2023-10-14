/**
 * Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
 */

function solution(inputArray, k) {
  return inputArray.filter((item, index) => {
    return ((index + 1) % k)
  })
}
