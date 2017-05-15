function arrayception(array) {
  let deepest = 0;

  const findLvl = (arr, cL = 1) => {
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        findLvl(val, cL + 1);
      } else if (cL > deepest) {
        deepest = cL;
      }
    });
  };

  findLvl(array);
  return deepest;
}

