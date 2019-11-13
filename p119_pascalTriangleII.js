/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (!rowIndex || rowIndex === 0) return [1];
  var res = [1, 1];
  if (rowIndex === 1) return res;
  for (var i = 1; i < rowIndex; i++) {
    const curRow = [];
    let left;
    let right;
    for (var j = 0; j < i + 2; j++) {
      left = res[j - 1];
      right = res[j];
      curRow[j] = left + right || 1;
    }
    res = curRow;
  }
  return res
};

console.log(getRow(4))