const router = require("express").Router();
const PayItemController = require('../controllers/payItem.controller')

router.get('/payItems', PayItemController.getAllPayItems);
router.get('/payItems/:pay_item_id', PayItemController.getOnePayItem);
router.post('/payItems', PayItemController.createPayItem);
router.put("/payItems/:pay_item_id", PayItemController.updatePayItem);
router.delete("/payItems/:pay_item_id", PayItemController.deletePayItem);

module.exports = router;