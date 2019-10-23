var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.min = 0;
  obj.max = 0;

  return obj;
};

var queueMethods = {};

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


