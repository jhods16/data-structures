

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  // need to count up for size and 
  //execute rehash if above 75% of limit
  var index = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(index);
  if (list === undefined) {
    list = [];
    this._storage.set(index, list);
  }
  // if (this.retrieve(k)){
  for (var i = 0; i < list.length; i++) {
    if (list[i][0] === k) {
      list[i][1] = v;
    } 
  }
  list.push([k, v]);
  this.size++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexList = this._storage.get(index);

  if (indexList) {
    for (var i = 0; i < indexList.length; i++) {
      if (indexList[i][0] === k) {
        return indexList[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  // need to count down for size and
  // execute rehash if below 25% of limit
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexList = this._storage.get(index);
  for (var i = 0; i < indexList.length; i++) {
    if (indexList[i][0] === k) {
      indexList.splice(i,1);
    }
  }
  this.size--;
};



/*
 * This is linear at worst. Ideally, with very large data sets, this is constant.
 */


