const router = require("express").Router();
const SaleController = require('../controllers/sale.controller')

router.get('/sales', SaleController.getAllSales);
router.get('/sales/:sale_id', SaleController.getOneSale);
router.post('/sales', SaleController.createSale);
router.put("/sales/:sale_id", SaleController.updateSale);
router.delete("/sales/:sale_id", SaleController.deleteSale);

module.exports = router;