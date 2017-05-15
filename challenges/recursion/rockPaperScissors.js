const RPS = (rounds) => {
  const options = ['r', 'p', 's'];

  const aP = (rounds, combos = []) => {
    const newCombos = [];
    if (rounds < 1) return combos;
    else if (combos.length === 0) {
      return aP(--rounds, options);
    }
    for (let i = 0; i < combos.length; i++) {
      options.forEach((letter) => {
        newCombos.push(combos[i] + letter);
      });
    }
    return aP(--rounds, newCombos);
  };

  return aP(rounds);
};

console.log(RPS(3));
console.log(RPS(4));
console.log(RPS(5));
