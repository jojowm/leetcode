/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var res = {};
  var ret;
  for(var i = 0; i < nums.length; i++) {
    if (res[nums[i]]) {
      res[nums[i]] = res[nums[i]] + 1
    } else {
      res[nums[i]] = 1;
    }
  }
  var maxTimes = Math.max(...Object.values(res));
  Object.keys(res).forEach((k) => {
    if(res[k] === maxTimes) {
      ret = k;
    }
  })
  return ret;
};

// console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))