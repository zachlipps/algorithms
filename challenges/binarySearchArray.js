// Given a sorted array return wheter or not a target element exists in Olog(n) time

function binarySearch(tree, target, l = 0, r) {
  if (r === undefined) {
    r = tree.length - 1;
  }
  let mid = Math.floor(r - l);
  let current = tree[mid];

  if (l > r) return -1;

  if (target === current) {
    return mid;
  } else if (target < current) {
    return binarySearch(tree, target, l, mid - 1)
  } else {
    return binarySearch(tree, target, mid + 1, r);
  }


}




binarySearch([1,2,3,4,5,6,7,8,9,10], 1); // 0
binarySearch([1,2,3,4,5,6,7,8,9,10], 5); // 4
binarySearch([1,2,3,4,5,6,7,8,9,10], 10); // 9