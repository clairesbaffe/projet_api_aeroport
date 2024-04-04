const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')

router.get("/", companyController.getAllCompanies);
router.post('/', companyController.createCompany);
router.get('/:id', companyController.getCompanyById);
router.post('/destination', companyController.addDestinationToCompany);
router.delete('/:id', companyController.deleteCompany);
router.patch('/:id', companyController.patchCompany);
router.delete('/destination/remove', companyController.removeDestinationToCompany);

module.exports = router;