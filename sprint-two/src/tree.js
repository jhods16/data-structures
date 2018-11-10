var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children[this.children.length] = Tree(value);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    var doesContain = false;
    for (var i = 0; i < this.children.length; i++) {
      doesContain = this.children[i].contains(target);
      if (doesContain === true) {
        return true;
      }
    }
  }
  return false;

};


/*
 * contains for this data structure is O(N) or linear. There are loops but they only loop over each array once.
 * addChild is contant time O(1)
 */
