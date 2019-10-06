/*
    Instructions

    The string "PAYPALISHIRING" is written in a zigzag pattern on 
    a given number of rows like this: (you may want to display this
    pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

Some notes:
        interval 2n - 2
        step    (distance between vertical column and middle indices )
                interval - 2i Range (0, interval)
        // for (each row)
            for (eac column)
                if (middle column)
*/

var convert = function(s, numRows) {
  const result = [];

  if (numRows < 2) {
    return s;
  }

  for (let i = 0; i < numRows; i++) {
    let j = i;
    while (j < s.length) {
      result.push(s[j]);

      // Letters in middle column
      if (i !== 0 && i !== numRows - 1) {
        const k = (numRows - i) * 2 - 1 - 1 + j;
        if (k < s.length) {
          result.push(s[k]);
        }
      }

      // Next character
      j += numRows * 2 - 1 - 1;
    }
  }
  return result.join("");
};

// input
// "PAYPALISHIRING"
// 3

// Expected output: "PAHNAPLSIIGYIR"
