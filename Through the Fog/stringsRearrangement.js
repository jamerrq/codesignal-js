/**
 * Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
solution(inputArray) = false.

There are 6 possible arrangements for these strings:

["aba", "bbb", "bab"]
["aba", "bab", "bbb"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["bab", "aba", "bbb"]
None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

For inputArray = ["ab", "bb", "aa"], the output should be
solution(inputArray) = true.

It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.
 */

function checkConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[i + 1][j]) {
        count++
      }
    }
    if (count !== 1) {
      return false
    }
  }
  return true
}

function permute(arr) {
  let result = []
  if (arr.length === 1) {
    return [arr]
  }
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i]
    let rest = arr.slice(0, i).concat(arr.slice(i + 1))
    let inner = permute(rest)
    for (let j = 0; j < inner.length; j++) {
      result.push([first].concat(inner[j]))
    }
  }
  return result
}

function solution(inputArray) {
  let result = false
  let permutations = permute(inputArray)
  for (let i = 0; i < permutations.length; i++) {
    if (checkConsecutive(permutations[i])) {
      result = true
      break
    }
  }
  return result
}
