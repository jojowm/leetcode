/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target <= nums[0]) {
        return 0
    } else {
        let flag = nums.length
        for(let i = 0; i < nums.length; ++i) {
            if (nums[i] >= target) {
                flag = i
                break
            }
        }
        return flag
    }
};

console.log(searchInsert([1,3,5,6], 7))