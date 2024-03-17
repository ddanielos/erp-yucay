const router = require("express").Router();
const LocationController = require('../controllers/location.controller')

router.get('/locations', LocationController.getAllLocations);
router.get('/locations/:location_id', LocationController.getOneLocation);
router.post('/locations', LocationController.createLocation);
router.put("/locations/:location_id", LocationController.updateLocation);
router.delete("/locations/:location_id", LocationController.deleteLocation);

module.exports = router;