var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var promptSchema = new Schema({
  text: {
    type: String
  },

  statingLine: {
    type: String
  },

  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Prompt', promptSchema);
