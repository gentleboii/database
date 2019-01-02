var express = require('express');
var router = express.Router();

const productController = require('../controllers/product');

router.get('/', productController.getProduct);

// router.get('/edit', productController.getEditProduct);

// router.post('/add', productController.postAddProduct);

// router.post('/update', productController.postUpdateProduct);

// router.get('/delete', productController.getDeleteProduct);

module.exports = router;