const router = require("express").Router();
const PaymentMethodController = require('../controllers/paymentMethod.controller')

router.get('/paymentMethods', PaymentMethodController.getAllPaymentMethods);
router.get('/paymentMethods/:payment_method_id', PaymentMethodController.getOnePaymentMethod);
router.post('/paymentMethods', PaymentMethodController.createPaymentMethod);
router.put("/paymentMethods/:payment_method_id", PaymentMethodController.updatePaymentMethod);
router.delete("/paymentMethods/:payment_method_id", PaymentMethodController.deletePaymentMethod);

module.exports = router;