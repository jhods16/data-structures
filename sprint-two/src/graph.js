

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this[value] = {};
  this[value].edge = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var connected in this[node].edge) {
    this[connected].edge[node] = false;
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].edge[toNode] === true) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge[toNode] = true;
  this[toNode].edge[fromNode] = true;
};

Graph.prototype.addAsymmetricalEdge = function(fromNode, toNode) {
  this[fromNode].edge[toNode] = true;
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].edge[toNode] = false;
  this[toNode].edge[fromNode] = false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node in this) {
    if (this[node].edge !== undefined) {
      cb(node);
    }
  }
};

/*
 * This is linear, there are loops but no double loops.
 */


