var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.max = 0;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;
  return obj;
};

var stackMethods = {};
// adding methods
stackMethods.push = function(value) {
  this.max++;
  this.storage[this.max] = value;
};

stackMethods.pop = function() {
  if (this.size() === 0) {
    return;
  }
  var res = this.storage[this.max];
  delete this.storage[this.max];
  this.max--;
  return res;
};

stackMethods.size = function() {
  return this.max;
};


