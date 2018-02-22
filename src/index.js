class Sorter extends Array{
  constructor( ) {
  super();
   
  }

  add(element) {
   return this.push(element);
  }

  at(index) {
   return this[index];
  }

  get length() {
   return this.length;
  }

  toArray() {
   return this;
  }

  sort(indices) {
    
      let arr = [];
      indices.sort(function(a,b){return a-b;});
      for (var i = 0; i < indices.length; i++) {
      arr.push(this[indices[i]]);
      }

     arr.sort(function(a,b){return a-b;});

      for (var i = 0; i < indices.length; i++) {
        this.splice(indices[i], 1, arr[i]);
      }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;