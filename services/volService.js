const { Vol } = require("../models/volModel");

async function createVol(vol) {
  return await Vol.create(hero);
}

async function getVolById(id) {
  return await Vol.findByPk(id);
}

async function getAllVols(criterias = {}){
    const where = {};
    if(criterias.destinationDepart){
        where.destinationDepart = criterias.destinationDepart;
    }
    if(criterias.destinationArrivee){
        where.destinationArrivee = criterias.destinationArrivee;
    }
    if(criterias.depart){
        where.depart = criterias.depart;
    }
    if(criterias.arrivee){
        where.arrivee = criterias.arrivee;
    }
    if(criterias.compagny){
        where.compagny = criterias.compagny;
    }
    return await Vol.findAll({ where });
}

module.exports = { createVol, getVolById, getAllVols };