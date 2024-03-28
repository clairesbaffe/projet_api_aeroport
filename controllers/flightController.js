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
    const { departureDate, arrivalDate, departureDestinationId, arrivalDestinationId, company } =
      req.query;
    const flights = await flightService.getAllFlights({
      departureDate,
      arrivalDate,
      departureDestinationId,
      arrivalDestinationId,
      company,
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
    res.status(500).json({ message: "Flight creation failed" });
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
  deleteFlight,
  patchFlight,
  deleteFlight
};
