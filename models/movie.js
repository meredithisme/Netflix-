// Movie model

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var MovieSchema = new Schema({
  text: { type: String, trim: true },
  completed: {type: Boolean, default: false}
});

var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;