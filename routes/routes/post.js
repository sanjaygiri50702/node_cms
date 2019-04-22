var express = require('express');
var router = express.Router();
var upload = require('../../config/multer')
var Postcontroller = require('../../controller/postController')

router.get('/',Postcontroller.getPostAll);
// router.get('/:postId',Postcontroller.getPostAll);
router.get('/:pageId',Postcontroller.getPostByPage)
//create post
router.post('/:pageId',upload.single('image'),Postcontroller.createPost);

router.delete('/:postId',Postcontroller.deletePost)

router.put('/:postId',Postcontroller.updatePost)

module.exports = router;