const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/category');

router.get('/:id', categoryCtrl.getOneCategory);
router.get('/', categoryCtrl.getAllCategories);
router.post('/', categoryCtrl.createCategory);
router.put('/:id', categoryCtrl.editCategory);
router.delete('/:id', categoryCtrl.deleteCategory);

module.exports = router;