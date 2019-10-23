var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.max = 0;

};


Stack.prototype.push = function(value) {
  this.max++;
  this.storage[this.max] = value;
};

Stack.prototype.pop = function() {
  if (this.size() === 0) {
    return;
  }
  var res = this.storage[this.max];
  delete this.storage[this.max];
  this.max--;
  return res;
};

Stack.prototype.size = function() {
  return this.max;
};