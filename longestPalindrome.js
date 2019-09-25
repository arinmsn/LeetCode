/*

Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/

var longestPalindrome = function(s) {
  var start = 0;
  var end = 0;
  var number = 0;

  for (var i = 0; i < s.length; i++) {
    number = Math.max(fromCenter(s, i, i), fromCenter(s, i, i + 1));

    if (number > end - start) {
      start = i - Math.floor((number - 1) / 2);
      end = i + Math.floor(number / 2);
    }
  }
  return s.slice(start, end + 1);
};

var fromCenter = function(s, left, right) {
  var l = left;
  var r = right;

  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};

longestPalindrome("babad"); // aba
