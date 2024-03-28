const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get("/", flightController.getAllFlights);
router.get('/:id', flightController.getFlightById);
router.delete('/:id', flightController.deleteFlight);
router.post('/', flightController.createFlight);
router.patch('/:id', flightController.patchFlight);

module.exports = router;