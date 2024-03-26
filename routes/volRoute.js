const express = require('express');
const router = express.Router();
const volController = require('../controllers/volController');

router.get("/", volController.getAllVols);
router.post('/', volController.createVol);
router.get('/:id', volController.getVolById);
//router.post('/:id', volController.deleteVol);

module.exports = router;