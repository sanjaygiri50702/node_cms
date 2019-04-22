var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var pageSchema = new Schema({
    title:String,
    description:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'Users'
    },
    post:[{
        type:Schema.Types.ObjectId,
        ref:'Posts',
    }]
})
module.exports = mongoose.model('Pages',pageSchema);