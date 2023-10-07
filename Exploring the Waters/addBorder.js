/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                     "*abc*",
                     "*ded*",
                     "*****"]
 */

function solution(picture) {
  const n = picture[0].length
  return ['*'.repeat(n + 2)].concat(picture.map(pic => `*${pic}*`)).concat(['*'.repeat(n + 2)])
}
