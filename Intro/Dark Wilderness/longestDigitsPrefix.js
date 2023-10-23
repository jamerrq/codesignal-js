/**
 * Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".
 */

function solution(inputString) {
  let acum = ''
  for (let i = 0; i < inputString.length; ++i) {
    if (!isNaN(inputString[i]) && inputString[i] !== ' ') {
      acum += inputString[i]
    } else {
      break
    }
  }
  return acum
}
