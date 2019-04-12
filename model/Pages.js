var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var pageSchema = new Schema({
    _id:{
        type:Schema.Types.ObjectId,
        default:new mongoose.Types.ObjectId
    },
    title:String,
    description:String
})
module.exports = mongoose.model('Pages',pageSchema);