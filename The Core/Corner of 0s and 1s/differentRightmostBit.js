/**
 * Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit (0-based).
 */

function solution(n, m) {
  return (() => {
    let nBinDigits = n.toString(2)
    let mBinDigits = m.toString(2)
    let maxLength = Math.max(nBinDigits.length, mBinDigits.length)
    nBinDigits = nBinDigits.padStart(maxLength, '0')
    mBinDigits = mBinDigits.padStart(maxLength, '0')
    let nBuff = [...nBinDigits].reverse()
    let mBuff = [...mBinDigits].reverse()
    let index = nBuff.findIndex((x, index) => x !== mBuff[index])
    return 2 ** index
  })()
}
