const { Flight } = require("../models/associations");
const { Company } = require("../models/associations");
const { Destination } = require("../models/associations");

const { Op } = require('sequelize');

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
    // Renvoie uniquement les vols dont la date et l'heure sont supérieurs à la date recherchée, pour les panneaux d'affichage des départs prochains dans les aéroports par exemple
    where.departureDate = { [Op.gt]: criterias.departureDate };
  }
  if (criterias.arrivalDate) {
    // idem pour les panneaux d'affichage des arrivées prochaines.
    where.arrivalDate = { [Op.gt]: criterias.arrivalDate };
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
  const code = flight.code;
  await flight.destroy();
  return { datas: { supprime: `flight ${code} deleted: ${flightId}` } };
}

async function patchFlight(flightId, datas){
  const flight = await Flight.findByPk(flightId);
  flight.departureDate = datas.departureDate;
  flight.arrivalDate = datas.arrivalDate;
  flight.code = datas.code;
  flight.departureTerminal = datas.departureTerminal;
  flight.arrivalTerminal = datas.arrivalTerminal;
  flight.departureDestinationId = datas.departureDestinationId;
  flight.arrivalDestinationId = datas.arrivalDestinationId;
  flight.companyId = datas.companyId;
  await flight.save();
  return {datas: {modifie: `destination ${datas.code} successfully patched`}};
}

module.exports = {
  createFlight,
  getFlightById,
  getAllFlights,
  deleteFlight,
  patchFlight
};
