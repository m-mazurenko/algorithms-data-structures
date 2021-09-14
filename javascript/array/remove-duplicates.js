/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 1 || !nums.length) {
        return nums.length;
    }
    let left = 0;
    let right = left + 1;

    while (right <= nums.length) {
        if (nums[left] !== nums[right]) {
            left += 1;
            nums[left] = nums[right]
        }
        right += 1;
    }
    return left
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
