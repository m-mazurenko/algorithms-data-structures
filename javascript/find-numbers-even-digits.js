/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        const string = nums[i].toString();
        if (string.length % 2 === 0) {
            cnt ++;
        }
    }
    return cnt;
};

console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));
