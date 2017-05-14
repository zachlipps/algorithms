function selectionSortIP(arr) {
  arr.forEach((el, i) => {
    let smallestIdx = i;
    let temp;

    for (let idx = i; idx < arr.length; idx++) {
      if (arr[idx] < arr[smallestIdx]) {
        smallestIdx = idx;
      }
    }

    temp = arr[smallestIdx];
    arr[smallestIdx] = arr[i];
    arr[i] = temp;
  });

  return arr;
}


console.log(selectionSortIP([4, 32, 1, -10]));
console.log(selectionSortIP([4, 32, 4]));


// console.log(selectionSortIP([4, 32, 1, 44, 8, 99, 38, 38, -10]));
