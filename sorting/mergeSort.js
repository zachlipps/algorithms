function merge(left, right) {
  let sorted = [];
  let iLeft = 0;
  let iRight = 0;

  while (sorted.length < (left.length + right.length)) {
    if (iLeft === left.length) sorted = sorted.concat(right.slice(iRight));
    else if (iRight === right.length) sorted = sorted.concat(left.slice(iLeft));
    else if (left[iLeft] <= right[iRight]) sorted.push(left[iLeft++]);
    else sorted.push(right[iRight++]);
  }

  return sorted;
}

function mergeSort(arr) {
  const center = Math.floor(arr.length / 2);
  if (center) {
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    console.log('L', left, 'R', right, center);
    return merge(mergeSort(left), mergeSort(right));
  }
  return arr;
}


console.log(mergeSort([1, 2, 3, 1]));
