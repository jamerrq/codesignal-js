/**
 * Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].
 */

function solution(inputArray) {
  inputArray.sort((a, b) => a.length - b.length)
  return inputArray.filter(str => str.length === inputArray.at(-1).length)
}
