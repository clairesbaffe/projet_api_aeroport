const { Flight } = require("../models/associations");
const { Company } = require("../models/associations");
const { Destination } = require("../models/associations");

async function createFlight(flight) {
  return await Flight.create(flight);
}

async function getFlightById(id) {
  return await Flight.findByPk(id);
}

async function getAllFlights(criterias = {}) {
  const include = [];
  const where = {};

  if (criterias.departureDate) {
    where.depart = criterias.depart;
  }
  if (criterias.arrivalDate) {
    where.arrivee = criterias.arrivee;
  }

  if (criterias.departureDestinationId) {
    where.departureDestinationId = criterias.departureDestinationId;
  }
  if (criterias.arrivalDestinationId) {
    where.arrivalDestinationId = criterias.arrivalDestinationId;
  }
  if (criterias.company) {
    where.company = criterias.company;
  }

  include.push({ model: Destination, as: 'departureDestination' });
  include.push({ model: Destination, as: 'arrivalDestination' });
  include.push({ model: Company, as: 'company' });


  return await Flight.findAll({ where, include });
}

async function deleteFlight(flightId) {
  const flight = await Flight.findByPk(flightId);
  await flight.destroy();
  return { datas: { supprime: "flight deleted" } };
}

module.exports = { createFlight, getFlightById, getAllFlights, deleteFlight };
