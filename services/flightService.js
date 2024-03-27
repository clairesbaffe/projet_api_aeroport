const { Flight } = require("../models/associations");
const { Company } = require("../models/associations");
const { Destination } = require("../models/associations");

async function getFlightById(id) {
  const include = [];

  include.push({ model: Destination, as: "departureDestination" });
  include.push({ model: Destination, as: "arrivalDestination" });
  include.push({ model: Company, as: "company" });

  return await Flight.findByPk(id, { include });
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

  include.push({ model: Destination, as: "departureDestination" });
  include.push({ model: Destination, as: "arrivalDestination" });
  include.push({ model: Company, as: "company" });

  return await Flight.findAll({ where, include });
}

async function createFlight(flight) {
  return await Flight.create(flight);
}

async function deleteFlight(flightId) {
  const flight = await Flight.findByPk(flightId);
  await flight.destroy();
  return { datas: { supprime: "flight deleted" } };
}

async function addDepartureDestinationToFlight(datas) {
  const flight = await Flight.findByPk(datas.flightId);
  flight.departureDestinationId = datas.destinationId;
  await flight.save();
}

async function addArrivalDestinationToFlight(datas) {
  const flight = await Flight.findByPk(datas.flightId);
  flight.arrivalDestinationId = datas.destinationId;
  await flight.save();
}

async function addCompanyToFlight(datas) {
  const flight = await Flight.findByPk(datas.flightId);
  flight.companyId = datas.companyId;
  await flight.save();
}

module.exports = {
  createFlight,
  getFlightById,
  getAllFlights,
  deleteFlight,
  addArrivalDestinationToFlight,
  addDepartureDestinationToFlight,
  addCompanyToFlight,
};
