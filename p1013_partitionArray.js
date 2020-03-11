/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  var sum = getSum(A);
  if (sum % 3 !== 0) return false // 不能被3整除，则不能分为三份
  var average = sum / 3; // 每份的和
  var temp = 0; // 记录每一部分累加的值
  var count = 0; // 记录份数

  // console.log(average)
  for(var i = 0; i < A.length; i++) {
    temp += A[i];
    
    if (temp === average) {
      console.log('temp', count, i, A.length - 1)
      count++;
      temp = 0;
      if (count === 2 && i === A.length - 1) { // 只能分成两份
        return false
      }
      if (count === 2) { // 已经分成两份了，剩下的加起来一定等于average
        return true
      }
    }
  }

  return false
}

var getSum = function(A) {
  return A.reduce((acc, cur) => acc += cur, 0);
}

// console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]))
// console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]))
console.log(canThreePartsEqualSum([12,-4,16,-5,9,-3,3,8,0]))