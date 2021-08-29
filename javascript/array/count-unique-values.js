function countUniqueValues(arr) {
    let left = 0;
    let right = 0;

    while (right <= arr.length) {
        if (arr[left] !== arr[right]) {
            left += 1;
            arr[left] = arr[right];
        }
        right += 1;
    }

    return left;
}

console.log(countUniqueValues([1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 5]))
