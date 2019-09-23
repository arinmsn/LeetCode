/*
    Longest Substring Without Repeating Characters

    Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

------------------

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

------------------

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
  var table = {};
  var i = 0;
  var j = 0;
  var count = 0;
  var max = 0;

  while (j < s.length) {
    if (!table[s[j]]) {
      table[s[j]] = true;
      console.log(table);
      j++;
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      while (s[i] !== s[j]) {
        table[s[i]] = false;
        i++;
        count--;
      }
      i++;
      j++;
    }
  }
  return max;
};
// s = "abcabcbb"; // Expected output: 3
s = "pwwkew"; // Expected output: 3
// s = "bbbbb";  // Expected output: 1
lengthOfLongestSubstring(s);
