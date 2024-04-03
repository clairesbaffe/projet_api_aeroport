const companyService = require('../services/companyService');

async function getCompanyById(req, res) {
    try {
        const id = req.params.id;
        const company = await companyService.getCompanyById(id);
        if (company) {
          res.json(company);
        } else {
          res.json({ "error": `Company not found (id: ${id})` })
        }
      } catch (err) {
        res.status(500).json({message: err.message})
      }
}

async function getAllCompanies(req, res){
    try{
        const { nom, id, nationalite } = req.query;
        const companies = await companyService.getAllCompanies({nom, id, nationalite});
        res.json(companies);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

async function createCompany(req, res){
    try {
        const company = await companyService.createCompany(req.body);
        res.json(company);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

async function deleteCompany(req, res){
    try{
      const id = req.params.id;
        const deletedCompany = await companyService.deleteCompany(id);
        res.json(deletedCompany);
    } catch (err){
        res.status(500).json({ message: err.message });
    }
}

async function addDestinationToCompany(req, res){
  try{
    await companyService.addDestinationToCompany(req.body);
    return res.json({ "note": `le lien a été fait` })
  } catch (err){
    res.status(500).json({ message: err.message });
  }
}

async function patchCompany(req, res) {
  try {
      const id = req.params.id;
      const patched = await companyService.patchCompany(id, req.body);
      return res.json(patched);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  }
}

async function removeDestinationToCompany(req, res){
  try{
    const liaison = await companyService.removeDestinationToCompany(req.body);
    return res.json(liaison)
  } catch (err){
      res.status(500).json({ message: err.message });
  }
}

module.exports = { getCompanyById, getAllCompanies, createCompany, deleteCompany, addDestinationToCompany, patchCompany, removeDestinationToCompany };