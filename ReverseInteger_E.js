/*
    Instructions
    ````````````````````````````````````````````````````````````````
    Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

    Input: 123
    Output: 321
    Example 2:

    Input: -123
    Output: -321
    Example 3:

    Input: 120
    Output: 21
    
    Note:
    Assume we are dealing with an environment which could only store
    integers within the 32-bit signed integer range: [−231,  231 − 1].
    
    For the purpose of this problem, assume that your function
    returns 0 when the reversed integer overflows.

*/

var reverse = function(x) {
  const reversed_nums = x
    .toString()
    .split("")
    .reverse()
    .join("");

  return Math.sign(x) * parseInt(reversed_nums);
};

// 123 should return 321
// -123 should return -321

var reverse = function(x) {
  return (
    parseFloat(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x)
  );
};

// More efficient solution
function reverse(x) {
  var reverseN = 0;
  var sign = x < 0;
  x = Math.abs(nx);
  while (x) {
    reverseN = reverseN * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // Use a number constant instead of calculating the power
  return reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN;
}
