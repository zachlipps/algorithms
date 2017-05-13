function bubbleSort(array, isSorted = false) {
  if (isSorted) {
    return array;
  }
  isSorted = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      isSorted = false;
    }
  }
  return bubbleSort(array, isSorted);
}


console.log(bubbleSort([3, 2, 1]));
