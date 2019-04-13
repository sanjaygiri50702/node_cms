var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt=require('bcrypt')
var SALT_WORK_FACTOR = 10;


var userSchema = new Schema({
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
userSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.comparePassword = function(candidatePassword,cb) {
    console.log(this)
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) throw err;
        console.log('ismatch',isMatch)
        return cb(null,isMatch)
    });
};

module.exports = mongoose.model('Users',userSchema);