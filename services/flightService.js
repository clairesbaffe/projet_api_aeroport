const { Flight } = require("../models/flightModel");

async function createFlight(flight) {
  return await Flight.create(flight);
}

async function getFlightById(id) {
  return await Flight.findByPk(id);
}

async function getAllFlights(criterias = {}){
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
    return await Flight.findAll({ where });
}

async function deleteFlight(flightId){
    const flight = await Flight.findByPk(flightId);
    await flight.destroy();
    return {datas: {supprime: "flight deleted"}};
}


module.exports = { createFlight, getFlightById, getAllFlights, deleteFlight };