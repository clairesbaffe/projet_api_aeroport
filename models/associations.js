const {Company} = require('./companyModel');
const {Destination} = require('./destinationModel');

Company.belongsToMany(Destination, {through: 'DestinationCompany'});
Destination.belongsToMany(Company, {through: 'DestinationCompany'});

module.exports = {Company, Destination}