var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.max = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage.max++;
    someInstance[storage.max] = value;
  };

  someInstance.pop = function() {
    if (someInstance.size() === 0) {
      return;
    }
    var res = someInstance[storage.max];
    delete someInstance[storage.max];
    storage.max--;
    return res;
  };

  someInstance.size = function() {
    return storage.max;
  };

  return someInstance;
};
