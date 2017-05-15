const powerSet = (string = 'obama') => {
  const map = {};
  string.split('').forEach((el) => {
    map[el] = el;
  });
  string = Object.keys(map).sort().join('');
  const perms = [];

  const findPerm = (str = '', s = string) => {
    perms.push(str);
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const rest = s[i + 1] ? s.slice(i + 1) : '';
      findPerm(str + char, rest);
    }
  };
  findPerm();

  return perms;
};

console.log(powerSet());
