/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.

Example 1:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false

*/
var isMatch = function(s, p) {
  var regMap = [];
  buildMap(regMap, p);
  return matchReg(s, 0);

  function buildMap(map, reg) {
    for (var i = 0; i < reg.length; i++) {
      if (reg[i] === "*") {
        if (map.length >= 1) {
          map[map.length - 1] = map[map.length - 1] + "*";
        }
      } else {
        map.push(reg[i]);
      }
    }
  }
  function matchReg(str, index) {
    if (index === regMap.length) {
      return str === "" ? true : false;
    }

    //single char
    if (regMap[index].indexOf("*") === -1) {
      if (str[0] === regMap[index] || (regMap[index] === "." && str != "")) {
        return matchReg(str.substring(1, str.length), index + 1);
      } else {
        return false;
      }
    }

    //.*  a*
    while (
      str !== "" &&
      (str[0] === regMap[index][0] || regMap[index][0] === ".")
    ) {
      if (matchReg(str, index + 1)) {
        return true;
      }
      str = str.substring(1, str.length);
    }

    return matchReg(str, index + 1);
  }
};
