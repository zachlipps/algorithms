class Stack  {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }
}

const s1 = new Stack();
s1.push(1);
s1.push(2);
console.log(s1.pop() === 2);
console.log(s1.size() === 1);