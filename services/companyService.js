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
    return await Company.findAll({where,
        include: [
            {
                through: "DestinationCompany",
                model: Destination
            }
        ]});
    
}

async function deleteCompany(companyId){
    const company = await Company.findByPk(companyId);
    const nom = company.nom;
    await company.destroy();
    return {datas: {supprime: `company ${nom} deleted: ${companyId}`}};
}

async function addDestinationToCompany(datas){
    const company = await Company.findByPk(datas.companyId);
    await company.addDestination(datas.destinationId)
}

async function patchCompany(companyId, datas){
    const company = await Company.findByPk(companyId);
    company.nom = datas.nom;
    company.nationalite = datas.nationalite;
    await company.save();
    return {datas: {modifie: `destination ${datas.nom} successfully patched`}};
}

async function removeDestinationToCompany(datas){
    const company = await Company.findByPk(datas.companyId);
    await company.removeDestination(datas.destinationId);
    return {supprime: "la liaison a été supprimée avec succès"}
}

module.exports = {  createCompany, getCompanyById, getAllCompanies, deleteCompany, addDestinationToCompany, patchCompany, removeDestinationToCompany };