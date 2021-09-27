/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  if (!arr.length) {
    return arr;
  }

  let i = arr.length - 1;
  let max = arr[i];

  while (i > -1) {
    const currTmp = arr[i];
    arr[i] = max;
    if (currTmp > max) {
      max = currTmp;
    }
    // max = Math.max(max, arr[i]);
    i--;
  }
  arr[arr.length - 1] = -1;
  return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));
