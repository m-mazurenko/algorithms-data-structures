function longestInversionalSubarray(a, b, c) {
  const data = {};
  for (let i = 0; i < b.length; i++) {
    data[b[i]] = true;
  }
  for (let i = 0; i < c.length; i++) {
    data[c[i]] = false;
  }

  let start = 0;
  let end = 0;
  let res = [];
  let maxRes = [];

  while (end < a.length) {
    if (data[a[end]]) {
      res.push(a[end]);
    } else {
      start = end;
      res.length > maxRes.length ? maxRes = res : maxRes;
      res = [];
    }
    res.length > maxRes.length ? maxRes = res : maxRes;
    end++;
  }
  return maxRes;
}

// console.log(longestInversionalSubarray([2, 1, 7, 1, 1, 5, 3, 5, 2, 1, 1, 1], [1, 3, 5], [2, 3]))
console.log(longestInversionalSubarray([2, 1, 9, 0, 1, 2, 3, 5, 4, 6, 2], [9, 2, 5, 1, 4, 6, 3, 0], [8, 7, 0, 1000000000]))
