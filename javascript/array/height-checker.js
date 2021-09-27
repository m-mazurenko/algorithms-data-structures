/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sortedHeights = heights.slice().sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    if (sortedHeights[i] !== heights[i]) {
      res++;
    }
  }
  return res;
};

console.log(heightChecker([1,1,4,2,1,3]));
