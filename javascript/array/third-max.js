/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums = nums.sort((a, b) => b - a);

  let left = 0;
  let right = left + 1;

  while (right <= nums.length) {
    if (nums[left] !== nums[right]) {
      left += 1;
      nums[left] = nums[right]
    }
    right += 1;
  }
  nums = nums.slice(0, left);

  if (nums.length >= 3) {
    return nums[2];
  }
  return nums[0];
};

console.log(thirdMax([1, 2]));
console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 2, 3, 1]));
