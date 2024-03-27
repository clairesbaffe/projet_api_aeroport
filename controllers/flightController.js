const flightService = require("../services/flightService");

async function getFlightById(req, res) {
  try {
    const id = req.params.id;
    const flight = await flightService.getFlightById(id);

    if (flight) {
      res.json(flight);
    } else {
      res.json({ error: `Flight not found (id: ${id})` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAllFlights(req, res) {
  try {
    const { destinationDepart, destinationArrivee, depart, arrivee, compagny } =
      req.query;
    const flights = await flightService.getAllFlights({
      destinationDepart,
      destinationArrivee,
      depart,
      arrivee,
      compagny,
    });
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createFlight(req, res) {
  try {
    const vol = await flightService.createFlight(req.body);
    res.json(vol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getFlightById, getAllFlights, createFlight };
