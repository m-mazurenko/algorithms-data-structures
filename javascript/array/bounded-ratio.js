function boundedRatio(a, l, r) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    let x = l;
    let result = false;
    while (x <= r && result === false) {
      if (a[i] === (i + 1) * x) {
        result = true;
      }
      x++;
    }
    newArr.push(result);
  }
  return newArr;
}

console.log(boundedRatio([8, 5, 6, 16, 5], 1, 3))
