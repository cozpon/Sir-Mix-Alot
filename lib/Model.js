var DataStore = require('../lib/DataStore');
function Model(schema){
  this.schema = schema;
  this.id = null;

  for (var key in this.schema){
    if(schema.hasOwnProperty(key))
      this[key] = null;
    }

//this.constructor.name is the constructor's name as the key
if(!(DataStore.store[this.constructor.name])){
  DataStore.store[this.constructor.name] = [];
  }
}


// Model.prototype.save = function(){

// };

// Model.prototype.destroy = function(){
//   if(id !== null){
//     id = null;
//   }
// };


Model.getNextId = function(){
  var temp = DataStore.store[this.name].length;
  if(temp === 0){// if the DataStore is empty/zero, return 1
    this.id = 1;
  } else {
    this.id++;
    this.id = temp; //The NEXT ID becomes old ID location pluuuuuus 1
  }
  return this.id;
};

// that returns the next successive number in the datastore
// for this model, the highest id plus one.
// getNextId should also return the highest
// id of a single collection in the data store plus one.


// Model.find = function(id){

// };

module.exports = Model;