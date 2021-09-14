// Multiple pointers
function averagePair(arr, num){
    if (arr.length === 0) {
        return false;
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const res = (arr[right] + arr[left]) / 2
        if (res === num) {
            return true;
        } else if (res > num) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // true
console.log(averagePair([1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([], 2)); // false
