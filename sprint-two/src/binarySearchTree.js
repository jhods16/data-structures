var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left;
  binarySearchTree.right;
  _.extend(binarySearchTree, binarySearchTreeMethods);
  return binarySearchTree;
};

binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
  var isTrue = false;
  if (this.value === value) {
    isTrue = true;
  } else {
    if (value < this.value) {
      if (this.left) {
        isTrue = this.left.contains(value);
      }
    } else {
      if (this.right) {
        isTrue = this.right.contains(value);
      }
    }
  }
  return isTrue;
};

binarySearchTreeMethods.depthFirstLog = function(func) {
  func.apply(this, [this.value]);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }

};


/*
 * This is a binary search operation so it has logarithmic time complexity O(Log N)
 */
