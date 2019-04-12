var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var ObjectId= mongoose.Types.ObjectId;
var postSchema = new Schema({
    _id:{
        type:Schema.Types.ObjectId,
        default:new ObjectId
    },
    title:String,
    description:String,
    media:[{
        type:Schema.Types.ObjectId,
        ref:'Medias'
    }]
    user:{
        type:Schema.Types.ObjectId,
        ref:'Users'
    },
    page:{
        type:Schema.Types.ObjectId,
        ref:'Pages'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
module.exports = mongoose.model('Posts',postSchema);