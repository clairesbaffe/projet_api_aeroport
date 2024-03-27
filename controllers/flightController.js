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
    const flight = await flightService.createFlight(req.body);
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteFlight(req, res){
  try{
      const id = req.params.id;
      const deletedFlight = await flightService.deleteFlight(id);
      res.json(deletedFlight);
  } catch (err){
      res.status(500).json({ message: err.message });
  }
}

async function addDepartureDestinationToFlight(req, res) {
  try {
    const flight = await flightService.addDepartureDestinationToFlight(
      req.body
    );
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: "Failed to find destination or flight" });
  }
}

async function addArrivalDestinationToFlight(req, res) {
  try {
    const flight = await flightService.addArrivalDestinationToFlight(req.body);
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: "Failed to find destination or flight" });
  }
}

async function addCompanyToFlight(req, res) {
  try {
    const flight = await flightService.addCompanyToFlight(req.body);
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: "Failed to find company or flight" });
  }
}

async function patchFlight(req, res){
  try{
    const id = req.params.id;
    const patched = await flightService.patchFlight(id,req.body);
    return res.json(patched)
  } catch (err){
    res.status(500).json({ message: err.message });
}
}

module.exports = {
  getFlightById,
  getAllFlights,
  createFlight,
  addArrivalDestinationToFlight,
  addDepartureDestinationToFlight,
  addCompanyToFlight,
  deleteFlight,
  patchFlight
};
