var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function(value) {
  var firstIn = this.storage[0];

  if (this.length > 0) {
    this.length--;
  }

  this.storage[0] = this.storage[1];

  return firstIn;
};

Queue.prototype.size = function(value) {
  return this.length;
};

var queue = new Queue();