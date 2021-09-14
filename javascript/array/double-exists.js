/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i += 1) {
        if (obj[arr[i] * 2] || obj[arr[i] / 2]) {
            return true;
        }
        obj[arr[i]] = true;
    }

    return false;
};

console.log(checkIfExist([10,2,5,3]))
console.log(checkIfExist([7,1,14,11]))
console.log(checkIfExist([-16, -13, 8]))
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
