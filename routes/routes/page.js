var express = require('express');
var router = express.Router();
const pageController = require('../../controller/pageController')
router.get('/',pageController.getPageAll);
router.get('/:pageId',pageController.getPageById);
router.post('/',pageController.createPage);
router.delete('/:pageId',pageController.deletePage);
router.put('/:pageId',pageController.updatePage);

module.exports = router;