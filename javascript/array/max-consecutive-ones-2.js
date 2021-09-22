// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3230

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let left = 0;
  let right = 0;
  let counter = 1;

  while(right < nums.length) {
    if (nums[right] === 0) {
      counter--;
    }
    if (counter < 0) {
      if (nums[left] === 0) {
        counter++;
      }
      left++;
    }
    right++;
  }
  return right - left;
};

console.log(findMaxConsecutiveOnes([0,1,0,1,1,0]));
