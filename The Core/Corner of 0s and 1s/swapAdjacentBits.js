/**
 * Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.
 */

function solution(n) {
  return n.toString(2).length % 2
    ? [...'0'.concat(n.toString(2))].reverse().reduce((acc, val, index) => {
        if (!+val) return acc;
        if (index % 2) return acc + 2 ** (index - 1);
        return acc + 2 ** (index + 1);
      }, 0)
    : [...n.toString(2)].reverse().reduce((acc, val, index) => {
        if (!+val) return acc;
        if (index % 2) return acc + 2 ** (index - 1);
        return acc + 2 ** (index + 1);
      }, 0);
}
