class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.min = 0;
    this.max = 0;
  }

  enqueue(value) {
    this.max++;
    this.storage[this.max] = value;
  };
  
  dequeue() {
    if (this.size() === 0) {
      return;
    }
    this.min++;
    var res = this.storage[this.min];
    delete this.storage[this.min];
    return res;
  };
  
  size() {
    return this.max - this.min;
  };

}
