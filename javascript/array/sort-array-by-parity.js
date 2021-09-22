/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let even = [];
  let odd = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
  }
  return [...even, ...odd];
};

console.log(sortArrayByParity([3,1,2,4]));
console.log(sortArrayByParity([0]));
console.log(sortArrayByParity([0, 1, 2, 3, 4, 0, 2]));
