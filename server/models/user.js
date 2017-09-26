var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log("User.js schema file has loaded.");

var UserSchema = new Schema({
  name: String,

  polls: [{type:Schema.Types.ObjectId, ref:"Poll"}]

});

mongoose.model('User', UserSchema);
