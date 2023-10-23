/**
 * Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function solution(s1, s2) {
  let counts1 = {}, counts2 = {}
  s1.split('').forEach(item => {
    counts1[item] = (counts1[item] ?? 0) + 1
  })
  s2.split('').forEach(item => {
    counts2[item] = (counts2[item] ?? 0) + 1
  })
  // console.log(counts1, counts2)
  const uniqueLetters = Array.from(new Set(s1.split('')))
  // console.log(uniqueLetters)
  return uniqueLetters.reduce((acc, val) => {
    return acc + Math.min(counts1[val] ?? 0, counts2[val] ?? 0)
  }, 0)
}
