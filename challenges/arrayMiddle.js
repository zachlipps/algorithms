// Given an array of negative/positive integers, return the element in the center position of the array.

// If the array has an even number of elements, return the average of the two middle elements instead.


function middle(numbers) {
  const l = numbers.length;
  return l % 2 === 0 ? (numbers[l / 2] + numbers[(l / 2) - 1]) / 2 : numbers[Math.floor(l / 2)];
}


console.log(middle([10, 20, 30, 40]) === 25);
