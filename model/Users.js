var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;
var userSchema = new Schema({
    _id:{
        type:Schema.Types.ObjectId,
        default:new ObjectId
    },
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    },
    isEditor:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('Users',userSchema);