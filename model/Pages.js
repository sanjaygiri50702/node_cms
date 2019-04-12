var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var pageSchema = new Schema({
    title:String,
    description:String
})
module.exports = mongoose.model('Pages',pageSchema);