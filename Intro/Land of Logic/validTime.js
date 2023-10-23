/**
 * Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.
 */

function solution(time) {
  try {
    let [hours, minutes] = time.split(':').map((x) => parseInt(x));
    return hours >= 0 && hours <= 23 && minutes >= 0 && minutes < 60;
  } catch {
    return false;
  }
}
