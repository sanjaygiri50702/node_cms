var multer = require('multer')
var path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(__dirname, '../uploads/'))
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null,  Date.now()+'-'+file.originalname)
    }
  })
  
  var upload = multer({ storage: storage })
  module.exports = upload;