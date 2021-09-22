/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let newIndex = Math.abs(nums[i]) - 1;
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }
  let result = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i - 1] > 0) {
      result.push(i);
    }
  }
  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([]));
