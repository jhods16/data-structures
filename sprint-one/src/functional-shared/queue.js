var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  newQueue.storage = {};
  newQueue.length = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(value) {
  var firstIn = this.storage[0];

  if (this.length > 0) {
    this.length--;
  }

  this.storage[0] = this.storage[1];

  return firstIn;
};

queueMethods.size = function(value) {
  return this.length;
};


