const router = require("express").Router();
const CustomerController = require('../controllers/customer.controller')

router.get('/customers', CustomerController.getAllCustomers);
router.get('/customers/:customer_id', CustomerController.getOneCustomer);
router.post('/customers', CustomerController.createCustomer);
router.put("/customers/:customer_id", CustomerController.updateCustomer);
router.delete("/customers/:customer_id", CustomerController.deleteCustomer);

module.exports = router;