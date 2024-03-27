const { Company } = require("./companyModel");
const { Destination } = require("./destinationModel");
const { Flight } = require("./flightModel");

Company.belongsToMany(Destination, { through: "DestinationCompany" });
Destination.belongsToMany(Company, { through: "DestinationCompany" });

Destination.hasMany(Flight, {
  foreignKey: "departureDestinationId",
  as: "departingFlights",
});

Destination.hasMany(Flight, {
  foreignKey: "arrivalDestinationId",
  as: "arrivingFlights",
});

Flight.belongsTo(Destination, {
  as: "departureDestination",
  foreignKey: "departureDestinationId",
});
Flight.belongsTo(Destination, {
  as: "arrivalDestination",
  foreignKey: "arrivalDestinationId",
});

Company.hasMany(Flight, {
  foreignKey: "companyId",
  as: "company",
});

Flight.belongsTo(Company, {
  as: "company",
  foreignKey: "companyId",
});

module.exports = { Company, Destination, Flight };
