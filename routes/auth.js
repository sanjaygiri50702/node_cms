var User = require('../model/Users')
function isAdmin(req,res,next){
    var id = req.headers.id;
    User.findById(id,(err,user)=>{
        if(err) throw err;
        // console.log(user)
        if(user.isAdmin) next(req);
        res.json({'err':'u r not admin'})

    })
}

function isLoggedIn(req,res,next){
    console.log('user',req.user)
    if(req.isAuthenticated())return next();
    var err = new Error('you r not authorize');
    return next(err)
}
module.exports.isAdmin  = isAdmin;
module.exports.isLoggedIn  = isLoggedIn;