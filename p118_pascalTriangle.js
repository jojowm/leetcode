/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows || numRows === 0) return [];
  var res = [[1]];
  if (numRows === 1) return res;
  for (var i = 1; i < numRows; i++) {
    const curRow = [];
    let left;
    let right;
    for (var j = 0; j < i + 1; j++) {
      left = res[i - 1][j - 1];
      right = res[i - 1][j];
      curRow[j] = left + right || 1;
    }
    res.push(curRow)
  }
  return res;
};

console.log(generate(5))