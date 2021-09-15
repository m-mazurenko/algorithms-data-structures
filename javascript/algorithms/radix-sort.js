function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitsBucket[digit].push(nums[i]);
    }
    nums = [].concat(...digitsBucket)
  }
  return nums;
}

console.log(radixSort([3, 556, 34523, 660, 22, 6094, 509, 1109, 2, 7]));

