var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail = Node(value);
      list.head.next = list.tail;
    }
  };

  list.removeHead = function() {
    var prevHead = list.head;
    list.head = list.head.next;
    return prevHead.value;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    } else if (list.head.next === null) {
      return false;
    } else {
      list.head = list.head.next;
      return list.contains(target);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  Adding and removing are in constant time O(1). contains is linear since it is iterating through the loop O(n).
 */
