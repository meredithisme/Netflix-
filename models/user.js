//User Model
var mongoose = require('mongoose');
    
var Schema = mongoose.Schema; 

var userSchema = new Schema ({
	text: { type: String, trim: true },
	movieId: [{type: Schema.Types.ObjectId, ref: 'movie'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;






