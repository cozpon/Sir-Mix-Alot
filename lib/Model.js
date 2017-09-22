var DataStore = require('../lib/DataStore');

function Model(schema){
  this.schema = schema;
  this.id = null;
 console.log(this.schema);
  for (var key in this.schema){
      this[key] = null;
    }
  if(!DataStore.store.Model){
   (DataStore.store.Model) = [];
  }
}
Model.getNextId = function(){
  return Model.key++;

};

module.exports = Model;