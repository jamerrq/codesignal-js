/**
 * Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
solution(text) = "steady".
 */

function solution(text) {
  let regex = /[a-z]+/gi
  let matches = [...text.matchAll(regex)]
  let ans = ''
  matches.forEach(([word]) => {
    if (word.length > ans.length) ans = word
  })
  return ans
}
