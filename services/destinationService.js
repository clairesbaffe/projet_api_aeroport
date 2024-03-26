const {Destination} = require('../models/destinationModel');
const {destinationCompanies} = require('../models/destination_companyModel')

//CRUD
async function createDestination(destination) {
    return await Destination.create(destination);
}


async function getDestinationById(destinationId){
    const destination = await Destination.findByPk(destinationId);
    return destination.toJSON();
}

async function getAllDestinations(criterias = {}){
    const where = {};
    if(criterias.nom){
        where.nom = criterias.nom;
    }
    if(criterias.id){
        where.id = criterias.id;
    }
    if(criterias.company){
        where.company = criterias.company;
    }
    return await Destination.findAll({where});
}

async function deleteDestination(destinationId){
    const destination = await Destination.findByPk(destinationId);
    await destination.destroy();
    return {datas: {supprime: "destination deleted"}};
}

module.exports = {  createDestination, getDestinationById, getAllDestinations, deleteDestination };