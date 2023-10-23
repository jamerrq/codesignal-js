/**
 * Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be solution(inputString) = "dsbaz".
 */

function solution(inputString) {
  let minValue = 97 // a
  let maxValue = 122 // z
  let result = ""
  for (let char of inputString) {
    let charValue = char.charCodeAt(0)
    let nextValue = charValue === maxValue ? minValue : charValue + 1
    result += String.fromCharCode(nextValue)
  }
  return result
}
