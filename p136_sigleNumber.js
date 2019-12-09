/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   var res = nums[0]
//   nums.sort(function(a, b) {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
//   for (var i = 0; i < nums.length; i = i + 2) {
//     if (nums[i] !== nums[i + 1]) {
//       res = nums[i]
//       break
//     }
//   }
//   return res; 
// };
// var singleNumber = function(nums) {
//   var obj = {};
//   var res = nums[0]
//   for (var i = 0; i < nums.length; i++) {
//     if (obj[nums[i]]) {
//       obj[nums[i]] += 1
//     } else {
//       obj[nums[i]] = 1
//     }
//   }
//   for (var i in obj) {
//     if (obj[i] === 1) {
//       res = i
//     }
//   }
//   return res; 
// };
var singleNumber = function(nums) {
  var res = 0
  for (var i = 0; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}
// console.log(singleNumber([2,2, 1]))
console.log(singleNumber([4,1,2,1,2]))