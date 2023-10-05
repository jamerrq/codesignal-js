/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 */

function solution(a) {
  const treesIndexes = a.reduce((acc, val, index) => {
    if (val === -1) acc.push(index)
    return acc
  }, [])
  const noTrees = a.filter(item => item !== -1).sort((a, b) => a - b)
  let currentIndex = 0
  for (let i = 0; i < noTrees.length; ++i) {
    while (a[currentIndex] === -1) currentIndex++
    a[currentIndex++] = noTrees[i]
  }
  return a
}
