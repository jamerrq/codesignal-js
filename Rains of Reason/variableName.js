/**
 * Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.} ch
 */

const isAlpha = function (ch) {
  return /^[A-Z]$/i.test(ch)
}

const isNum = function (ch) {
  return !isNaN(ch) && ch !== ' '
}

function solution(name) {
  for (let i = 0; i < name.length; ++i) {
    let char = name[i]
    if (i == 0) {
      if (isNum(char)) return false
      if (!isAlpha(char) && char !== '_') {
        return false
      }
    } else {
      if (!isNum(char) && !isAlpha(char) && char !== '_') {
        return false
      }
    }
  }
  return true
}
