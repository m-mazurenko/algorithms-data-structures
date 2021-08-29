// Sliding Window
function maxSubarraySum(arr, num){
    // First find sum of first num items
    if (arr.length < num) {
        return null;
    }
    let tmp = 0;
    let max = 0;
    for (let i = 0; i < num; i += 1) {
        tmp += arr[i];
    }
    max = tmp;
    for (let i = num; i < arr.length; i += 1) {
        tmp = tmp - arr[i - num] + arr[i];
        max = Math.max(tmp, max);
    }
    return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([2, 3], 3));
