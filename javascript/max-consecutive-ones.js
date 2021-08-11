/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count += 1;
        } else {
            result = Math.max(result, count);
            count = 0;
        }
    }
    return Math.max(result, count);
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))
console.log(findMaxConsecutiveOnes([0]))
