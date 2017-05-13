function insertionSort(array) {
  const result = [];

  array.forEach((el) => {
    if (!result.length) {
      result.push(el);
    } else {
      for (let i = 0; i < result.length; i += 1) {
        if (el < result[i]) {
          result.splice(i, 0, el);
          return;
        } else if (el > result[i] && i === result.length - 1) {
          result.push(el);
        }
      }
    }
  });

  return result;
}


console.log(insertionSort([4, 32, 1, 44, 8]));
