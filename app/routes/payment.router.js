const router = require("express").Router();
const PaymentController = require('../controllers/payment.controller')

router.get('/payments', PaymentController.getAllPayments);
router.get('/payments/:payment_id', PaymentController.getOnePayment);
router.post('/payments', PaymentController.createPayment);
router.put("/payments/:payment_id", PaymentController.updatePayment);
router.delete("/payments/:payment_id", PaymentController.deletePayment);

module.exports = router;