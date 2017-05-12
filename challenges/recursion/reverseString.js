function revString(str, rev = '') {
  if (str.length) {
    rev += str.slice(str.length - 1)[0];
    return revString(str.slice(0, str.length - 1), rev);
  }
  return rev;
}

console.log(revString('hello'));
