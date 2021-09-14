// https://leetcode.com/problems/valid-mountain-array/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }

    let i = 0;
    let length = arr.length;

    while (i + 1 < length && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i === length - 1) {
        return false;
    }

    while (i + 1 < length && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === length - 1;
};

console.log(validMountainArray([2,1]))
console.log(validMountainArray([3,5,5]))
console.log(validMountainArray([0,3,2,1]))
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))
