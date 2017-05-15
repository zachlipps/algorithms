const stringPerms = (string = 'zak') => {
  const perms = [];

  const findPerm = (str = '', s = string) => {
    console.log(s);
    perms.push(str);
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const rest = s[i + 1] ? s.slice(0, i) + s.slice(i + 1) : s.slice(0, i);
      findPerm(str + char, rest);
    }
  };
  findPerm();

  return perms;
};

stringPerms();
