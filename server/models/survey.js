var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
  question: {type:String, required:true, minlength: 8},
  option1: {type:String, required:true, minlength: 3},
  option2: {type:String, required:true, minlength: 3},
  option3: {type:String, required:true, minlength: 3},
  option4: {type:String, required:true, minlength: 3},
  like1: {type: Number, default: 0},
  like2: {type: Number, default: 0},
  like3: {type: Number, default: 0},
  like4: {type: Number, default: 0},

  _user: {type:Schema.Types.ObjectId, ref:"User"},
  created_at: {type:Date, default:new Date}
});

mongoose.model('Survey', SurveySchema);
