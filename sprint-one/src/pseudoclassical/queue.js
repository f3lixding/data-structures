var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.min = 0;
  this.max = 0;
};

Queue.prototype.enqueue = function(value) {
  this.max++;
  this.storage[this.max] = value;
};

Queue.prototype.dequeue = function() {
  if (this.size() === 0) {
    return;
  }
  this.min++;
  var res = this.storage[this.min];
  delete this.storage[this.min];
  return res;
};

Queue.prototype.size = function() {
  return this.max - this.min;
};



