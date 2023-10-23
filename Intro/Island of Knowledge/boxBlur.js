/**
 * Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.
 */

function boxBlur(image) {
  let ans = []
  for (let i = 1; i < image.length - 1; ++i) {
    let row = []
    for (let j = 1; j < image[i].length - 1; ++j) {
      let sum = 0
      for (let k = -1; k <= 1; ++k) {
        for (let l = -1; l <= 1; ++l) {
          sum += image[i + k][j + l]
        }
      }
      row.push(Math.floor(sum / 9))
    }
    ans.push(row)
  }
  return ans
}
