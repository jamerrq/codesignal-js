/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
solution(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
solution(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
 */

function swap(arr, i, j) {
  return arr.map((item, index, array) => {
    if (index === i) return array[j]
    if (index === j) return array[i]
    return item
  })
}

function areEqual(a, b) {
  const aSorted = [...a]
  const bSorted = [...b]
  return aSorted.reduce((acc, val, index) => {
    acc &&= val == bSorted[index]
    return acc
  }, true)
}

function solution(a, b) {
  let equal = true
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      let candidates = a.slice(i + 1).map((num, index) => num === b[i] ? index + i + 1 : - 1).filter(i => i !== -1)
      // console.log(candidates)
      for (let j of candidates) {
        let optionJ = swap(a, i, j)
        // console.log(j, optionJ)
        if (areEqual(b, optionJ)) return true
      }
      return false
    }
  }
  return true
}
