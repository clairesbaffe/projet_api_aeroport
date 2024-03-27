///const {Company} = require('../models/companyModel');
const {Company, Destination} = require('../models/associations');


//CRUD
async function createCompany(company) {
    return await Company.create(company);
}

async function getCompanyById(companyId){
    const company = await Company.findByPk(companyId);
    return company.toJSON();
}

async function getAllCompanies(criterias = {}){
    const where = {};
    if(criterias.nom){
        where.nom = criterias.nom;
    }
    if(criterias.id){
        where.id = criterias.id;
    }
    if(criterias.nationalite){
        where.nationalite = criterias.nationalite;
    }
    return await Company.findAll({where});
    
}

async function deleteCompany(companyId){
    const company = await Company.findByPk(companyId);
    await company.destroy();
    return {datas: {supprime: "company deleted"}};
}

async function addDestinationToCompany(destinationId, companyId){
    const company = await Company.findByPk(companyId);
    await company.addDestination(destinationId)
}

module.exports = {  createCompany, getCompanyById, getAllCompanies, deleteCompany, addDestinationToCompany };