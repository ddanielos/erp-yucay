const router = require("express").Router();
const SaleItemController = require('../controllers/saleItem.controller')

router.get('/saleItems', SaleItemController.getAllSaleItems);
router.get('/saleItems/:sale_item_id', SaleItemController.getOneSaleItem);
router.post('/saleItems', SaleItemController.createSaleItem);
router.put("/saleItems/:sale_item_id", SaleItemController.updateSaleItem);
router.delete("/saleItems/:sale_item_id", SaleItemController.deleteSaleItem);

module.exports = router;