var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {

    storage[size] = value; // 0: 'a', 1: 'b'
    
    size++;
  };

  someInstance.dequeue = function() {
    var firstIn = storage[0];

    if (size > 0) {
      size--;
    }

    storage[0] = storage[1];

    return firstIn;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
