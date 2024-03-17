const router = require("express").Router();
const WarehouseController = require('../controllers/warehouse.controller')

router.get('/warehouses', WarehouseController.getAllWarehouses);
router.get('/warehouses/:warehouse_id', WarehouseController.getOneWarehouse);
router.post('/warehouses', WarehouseController.createWarehouse);
router.put("/warehouses/:warehouse_id", WarehouseController.updateWarehouse);
router.delete("/warehouses/:warehouse_id", WarehouseController.deleteWarehouse);

module.exports = router;