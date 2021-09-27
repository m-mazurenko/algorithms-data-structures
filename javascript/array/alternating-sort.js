function alternatingSort(a) {
  let left = 0;
  let right = a.length - 1;
  let newArr = [];
  let sortedArr = a.slice().sort((a, b) => a - b);

  while (left < right) {
    newArr.push(a[left]);
    newArr.push(a[right]);
    left++;
    right--;
  }
  console.log(sortedArr)
  console.log(newArr)

  let acc;

  for (let i = 0; i < newArr.length; i++) {
    if (acc !== undefined && acc === newArr[i]) {
      return false;
    }
    if (sortedArr[i] !== newArr[i]) {
      return false;
    }
    acc = newArr[i];
  }
  return true;
}

console.log(alternatingSort([1, 3, 5, 6, 4, 2]));
console.log(alternatingSort([-92, -23, 0, 45, 89, 96, 99, 95, 89, 41, -17, -48]));
