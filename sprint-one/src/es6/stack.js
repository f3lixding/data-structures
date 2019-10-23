class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.max = 0;
  }

  push(value) {
    this.max++;
    this.storage[this.max] = value;
  };
  
  pop() {
    if (this.size() === 0) {
      return;
    }
    var res = this.storage[this.max];
    delete this.storage[this.max];
    this.max--;
    return res;
  };
  
  size() {
    return this.max;
  };

}