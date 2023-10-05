/**
 * Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.
 */

function hasNest(string) {
  return string.indexOf('(') !== -1 && string.indexOf(')') !== -1
}

function auxReverse(string) {
  if (hasNest(string)) {
    const leftIndex = string.indexOf('(')
    const rightIndex = string.lastIndexOf(')')
    const extracted = string.slice(leftIndex + 1, rightIndex)
    const leftPart = string.slice(0, leftIndex)
    const rightPart = string.slice(rightIndex + 1)
    const newString = leftPart + auxReverse(extracted) + rightPart
    return newString.split('').reverse().join('')
  }
  // caso base, no hay paréntesis dentro del string
  return string.split('').reverse().join('')
}

function solution(inputString) {
  while (hasNest(inputString)) {
    const leftIndex = inputString.indexOf('(')
    let rightIndex = leftIndex + 1
    let leftPars = 0
    while (rightIndex < inputString.length) {
      if (inputString[rightIndex] === ')') {
        if (!leftPars) break
        leftPars--
      }
      if (inputString[rightIndex] === '(') {
        leftPars++
      }
      rightIndex++
    }
    const extracted = inputString.slice(leftIndex + 1, rightIndex)
    const leftPart = inputString.slice(0, leftIndex)
    const rightPart = inputString.slice(rightIndex + 1)
    inputString = leftPart + auxReverse(extracted) + solution(rightPart)
  }
  return inputString
}
