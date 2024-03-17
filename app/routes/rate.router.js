const router = require("express").Router();
const rateController = require('../controllers/rate.controller')


router.get('/rates', rateController.getAllRates);
router.get('/rates/:rate_id', rateController.getOneRate);
router.post('/rates', rateController.createRate);
router.put("/rates/:rate_id", rateController.updateRate);
router.delete("/rates/:rate_id", rateController.deleteRate);

module.exports = router;