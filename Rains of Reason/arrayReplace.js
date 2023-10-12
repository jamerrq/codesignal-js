/**
 * Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
 */


// Copilot solution
function solutionCopilot(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((elem) => {
    if (elem === elemToReplace) {
      return substitutionElem
    }
    return elem
  })
}

// My solution
function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(item => item === elemToReplace ? substitutionElem : item)
}
