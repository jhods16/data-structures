class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  enqueue(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  dequeue() {
    var firstIn = this.storage[0];

    if (this.length > 0) {
      this.length--;
    }

    this.storage[0] = this.storage[1];

    return firstIn;
  }

  size() {
    return this.length;
  }
}

var queue = new Queue();