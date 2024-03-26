const volService = require("../services/volService");

async function getVolById(req, res) {
  try {
    const id = req.params.id;
    const vol = await volService.getVolById(id);

    if (vol) {
      res.json(vol);
    } else {
      res.json({ error: `Vol not found (id: ${id})` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAllVols(req, res) {
  try {
    const { destinationDepart, destinationArrivee, depart, arrivee, compagny } =
      req.query;
    const vols = await volService.getAllVols({
      destinationDepart,
      destinationArrivee,
      depart,
      arrivee,
      compagny,
    });
    res.json(vols);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createVol(req, res) {
  try {
    const vol = await volService.createVol(req.body);
    res.json(vol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getVolById, getAllVols, createVol };
