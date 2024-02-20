const router = require("express").Router();
const ProductController = require('../controllers/product.controller')

router.get('/products', ProductController.getAllProducts);
router.get('/products/:product_id', ProductController.getOneProduct);
router.post('/product', ProductController.createProduct);
router.put("/products/:product_id", ProductController.updateProduct);
router.delete("/products/:product_id", ProductController.deleteProduct);

module.exports = router;