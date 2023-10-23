/**
 * Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
solution(product) = 26;
For product = 19, the output should be
solution(product) = -1.
 */

function isPrime(number) {
  if (number < 1) return false
  for (let i = 2; i < number; ++i) {
    if (number % i === 0) return false
  }
  return true
}

function solution(num) {
  if (!num) return 10
  if (num === num % 10) return num
  if (isPrime(num)) return -1
  let div = 9
  while (num % div !== 0 && div > 1) {
    div--
  }
  if (div === 1) return -1
  if (!div) return -1
  let subsolution = solution(Math.floor(num / div))
  return subsolution !== -1 ? parseInt(subsolution + '' + div) : subsolution
}
