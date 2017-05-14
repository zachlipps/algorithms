// not in place

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


// in place


const insertionSortIP = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        array.splice(j, 0, array.splice(i, 1)[0]);
      }
    }
  }
  return array;
};


console.log(insertionSortIP([4, 32, 1, 44, 8, 99, 38, 38, -10]));
