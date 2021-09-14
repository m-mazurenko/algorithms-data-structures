/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0;
    for (let right = 0; right < nums.length; right += 1) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left += 1;
        }
    }
    return left;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log(removeElement([3, 3], 3));
console.log(removeElement([4, 5], 5));
console.log(removeElement([1], 1));
