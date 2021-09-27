function isZigzagArr(arr) {
  return ((arr[0] < arr[1] && arr[1] > arr[2]) || (arr[0] > arr[1] && arr[1] < arr[2])) ? 1 : 0;
}

function isZigzag(numbers) {
  let result = [];
  let left = 0;
  let right = 3;
  while (right <= numbers.length) {
    result.push(isZigzagArr(numbers.slice(left, right)));
    left++;
    right++;
  }
  return result;
}

console.log(isZigzag([1, 2, 1, 3, 4]));
