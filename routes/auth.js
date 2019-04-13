var User = require('../model/Users')
function isAdmin(req,res,next){
    var id = req.headers.id;
    User.findById(id,(err,user)=>{
        if(err) throw err;
        console.log(user)
        if(user.isAdmin) next(req);
        res.json({'err':'u r not admin'})

    })
}
module.exports  = isAdmin;