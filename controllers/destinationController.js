const destinationService = require('../services/destinationService');

async function getDestinationById(req, res) {
    try {
        const id = req.params.id;
        const destination = await destinationService.getDestinationById(id);
        if (destination) {
          res.json(destination);
        } else {
          res.json({ "error": `Destination not found (id: ${id})` })
        }
      } catch (err) {
        res.status(500).json({message: err.message})
      }
}

async function getAllDestinations(req, res){
    try{
        const { nom, id, company } = req.query;
        const destinations = await destinationService.getAllDestinations({nom, id, company});
        res.json(destinations);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

async function createDestination(req, res){
    try {
        const destination = await destinationService.createDestination(req.body);
        res.json(destination);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

async function deleteDestination(req, res){
    try{
      const id = req.params.id;
        const deletedDestination = await destinationService.deleteDestination(id);
        res.json(deletedDestination);
    } catch (err){
        res.status(500).json({ message: err.message });
    }
}


async function addCompanyToDestination(req, res){
  try{
    await destinationService.addCompanyToDestination(req.body);
    return res.json({ "note": `le lien a été fait` })
  } catch (err){
      res.status(500).json({ message: err.message });
  }
}


async function patchDestination(req, res){
  try{
    const id = req.params.id;
    const patched = await destinationService.patchDestination(id,req.body);
    return res.json(patched)
  } catch (err){
    res.status(500).json({ message: err.message });
}
}

async function removeCompanyToDestination(req, res){
  try{
    const liaison = await destinationService.removeCompanyToDestination(req.body);
    return res.json(liaison)
  } catch (err){
      res.status(500).json({ message: err.message });
  }
}

module.exports = { getDestinationById, getAllDestinations, createDestination, deleteDestination, addCompanyToDestination, patchDestination, removeCompanyToDestination };