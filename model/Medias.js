var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var mediaSchema = new Schema({
    caption:{
        type:String,
        default:null
    },
});
module.exports = mongoose.model('Medias',mediaSchema);