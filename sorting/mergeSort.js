function mergeSorted(arr1, arr2) {
  const sorted = [];
  let currentIdx1 = 0;
  let currentIdx2 = 0;

  while (currentIdx1 !== arr1.length && currentIdx2 !== arr2.length) {
    const el1 = arr1[currentIdx1];
    const el2 = arr2[currentIdx2];
    if (el1 && el1 < el2 || !el2) {
      sorted.push(el1);
      currentIdx1++;
    }
    sorted.push(el2);
    currentIdx2++;
  }
  return sorted;
}


console.log(mergeSorted([1, 2, 3], [2, 3, 4]));
