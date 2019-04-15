var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var pageSchema = new Schema({
    title:String,
    description:String,
    image:[{
        type:Schema.Types.ObjectId,
        ref:'Medias'
    }],
    post:[{
        type:Schema.Types.ObjectId,
        ref:'Posts',
    }]
})
module.exports = mongoose.model('Pages',pageSchema);