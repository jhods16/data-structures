var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return (this._storage.hasOwnProperty(item));
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.replace = function(item1, item2) {
  this.remove(item1);
  this.add(item2);
};

/*
 * this is constant for adding and removing but it is linear for lookups
 */
