function flatten(arr) {
  const flat = [];

  const flatter = (a) => {
    a.forEach((el) => {
      if (Array.isArray(el)) {
        return flatter(el);
      }
      flat.push(el);
    });
  };

  flatter(arr);
  return flat;
}

console.log(flatten([5, [[6], [5, 4]]]));
