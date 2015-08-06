function Set() {
  this.dataStore = [];
}

Set.prototype.getData = function() {
  return this.dataStore;
}

Set.prototype.add = function(value){
  if (this.dataStore.indexOf(value) < 0) {
    this.dataStore.push(value);
    return true;
  } else {
    return false;
  }
}

Set.prototype.remove = function(value) {
  var index = this.dataStore.indexOf(value);
  if (index > -1) {
    this.dataStore.splice(index,1);
    return true;
  } else {
    return false;
  }
}

Set.prototype.include = function(value) {
  if (this.dataStore.indexOf(value) > -1) {
    return true;
  } else {
    return false;
  }
}

Set.prototype.union = function(set) {
  var union = new Set();

  for (var i = 0; i < this.dataStore.length; i++) {
    union.add(this.dataStore[i])
  }

  for (var i = 0; i < set.dataStore.length; i++) {
    if(!union.include(set.dataStore[i])) {
      union.add(set.dataStore[i]);
    }
  }
  return union;
}

Set.prototype.intersection = function(set) {
  var intersection = new Set();

  for (var i = 0; i < this.dataStore.length; i++) {
    if(set.include(this.dataStore[i])) {
      intersection.add(this.dataStore[i])
    }
  }
  return intersection;
}