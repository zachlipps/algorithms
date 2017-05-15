function quickSort(arr) {
  if (arr.length === 0) { return []; }

  const pI = Math.floor(arr.length / 2);
  const pivot = arr.splice(pI, 1);

  const left = [];
  const right = [];

  arr.forEach(el => el < pivot ? left.push(el) : right.push(el));
  return quickSort(left).concat(pivot, quickSort(right));
}


quickSort([1, 2, 3, 5, 67, 0]);
