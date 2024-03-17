const router = require("express").Router();
const SaleTypeController = require('../controllers/saleType.controller')

router.get('/saleTypes', SaleTypeController.getAllSaleTypes);
router.get('/saleTypes/:sale_type_id', SaleTypeController.getOneSaleType);
router.post('/saleTypes', SaleTypeController.createSaleType);
router.put("/saleTypes/:sale_type_id", SaleTypeController.updateSaleType);
router.delete("/saleTypes/:sale_type_id", SaleTypeController.deleteSaleType);

module.exports = router;