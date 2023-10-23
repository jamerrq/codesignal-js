/**
 * Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
 */

function solution(inputString) {
  const n = inputString.length
  let freqs = {}
  let odds = 0
  inputString.split('').forEach(char => {
    freqs[char] = (freqs[char] ?? 0) + 1
    if (freqs[char] % 2 === 1) {
      odds++
    } else {
      odds--
    }
  })
  console.log('freqs', freqs, odds)
  if (n % 2) {
    return odds === 1
  } else {
    return !odds
  }
}
