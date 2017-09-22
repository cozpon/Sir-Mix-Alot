var Model = require("../lib/Model");

function User(){
  var UserSchema = {
    username: String,
    password: String,
  };
  Model.call(this, UserSchema);
  Model.extend(User);
}


module.exports = User;