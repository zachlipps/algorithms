// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Examples
// [ [ 5 ], [ [ ] ] ] 2
// [ 10, 20, 30, 40 ] 1
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] 4
// [ ]  0
// [ [ [ ] ] ]  0

/*
  Input: Array containing arrays or any other values that are not arrays
  Output: An integer representing the deepest level of a non-array value in a nested array
  Constraints: Unlimited nested levels
  Edge cases: Non-array value inputs
  Base case: Find an element that is not an array
*/

let t1 = [[[[[1,[]]]]]];

const arraycursion = (nestedArr) => {
  let maxDepth = 0;

  const rec = (arr, depth = 0) => {

    arr.forEach(el => {
      if (Array.isArray(el)) {
        rec(el, ++ depth)
      } else {
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    })
  }

  rec(nestedArr);
  return maxDepth;
}

console.log(arrayception(t1) === 4);