const router = require("express").Router();
const SellerController = require('../controllers/seller.controller')

router.get('/sellers', SellerController.getAllSellers);
router.get('/sellers/:sellerr_id', SellerController.getOneSeller);
router.post('/sellers', SellerController.createSeller);
router.put("/sellers/:seller_id", SellerController.updateSeller);
router.delete("/sellers/:seller_id", SellerController.deleteSeller);

module.exports = router;