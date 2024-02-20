const router = require("express").Router();
const rateController = require('../controllers/rate.controller')


router.get('/rates', rateController.getAllRates);

router.get('/rate/:rate_id', rateController.getOneRate);

router.post('/rate', rateController.createRate);

router.put("/rate/:rate_id", rateController.updateRate);

router.delete("/rate/:rate_id", rateController.deleteRate);

module.exports = router;