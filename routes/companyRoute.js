const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')

router.get("/", companyController.getAllCompanies);
router.post('/', companyController.createCompany);
router.get('/:id', companyController.getCompanyById);
//router.post('/:id', companyController.deleteCompany);

module.exports = router;