class Queue {
  constructor() {
    this.queue = {};
    this.currentIndex = 0;
    this.lastIndex = 0;
  }

  enqueue(vals) {
    vals.forEach(val => {
      this.queue[this.lastIndex++] = val;
    });
  }

  dequeue() {
    let val = this.queue[this.currentIndex];
    delete this.queue[this.currentIndex];
    this.currentIndex ++;
    return val;
  }

  size() {
    return this.lastIndex - this.currentIndex;
  }
}

const els = [1,2,3,4]


const q1 = new Queue();
q1.enqueue(els);
console.log(q1.queue)
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.queue);