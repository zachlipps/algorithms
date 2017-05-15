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


console.log(merge([1, 2, 3], [2, 3, 4]));
