var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.min = 0;
  storage.max = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.max++;
    someInstance[storage.max] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() === 0) {
      return;
    }
    storage.min++;
    var res = someInstance[storage.min];
    delete someInstance[storage.min];
    return res;
  };

  someInstance.size = function() {
    return storage.max - storage.min;
  };

  return someInstance;
};
