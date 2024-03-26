const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.get("/", destinationController.getAllDestinations);
router.post('/', destinationController.createDestination);
router.get('/:id', destinationController.getDestinationById);
//router.post('/:id', destinationController.deleteDestination);

module.exports = router;