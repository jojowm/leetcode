/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length
    }

    var i = 0, j = 0;
    while(j < nums.length) {
        if (nums[i] == nums[j]) {
            j++;
        } else {
            i++;
            nums[i] = nums [j];
            j++;
        }
    }
    return i + 1;
};

console.log(removeDuplicates([1,1,2]))