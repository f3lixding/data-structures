var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.min = 0;
  obj.max = 0;
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;
  return obj;
};

var queueMethods = {};
// adding methods
queueMethods.enqueue = function(value) {
  this.max++;
  this.storage[this.max] = value;
};

queueMethods.dequeue = function() {
  if (this.size() === 0) {
    return;
  }
  this.min++;
  var res = this.storage[this.min];
  delete this.storage[this.min];
  return res;
};

queueMethods.size = function() {
  return this.max - this.min;
};


