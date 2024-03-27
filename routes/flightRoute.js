const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get("/", flightController.getAllFlights);
router.post('/', flightController.createFlight);
router.get('/:id', flightController.getFlightById);
//router.post('/:id', flightController.deleteFlight);

module.exports = router;