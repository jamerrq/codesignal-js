/**
 * Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
solution(st) = "abcdcba".
 */

function isPalindrome(st) {
  return st === st.split('').reverse().join('')
}

function solution(st) {
  let index = 0
  let tail = ''
  while (!isPalindrome(st + tail)) {
    tail = `${st[index]}${tail}`
    index++
  }
  return st + tail
}
