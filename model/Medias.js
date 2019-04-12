var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var mediaSchema = new Schema({
    _id:Schema.Types.ObjectId,
    caption:String,
});
module.exports = mongoose.model('Medias',mediaSchema);