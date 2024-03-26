const Destination = require('./destinationModel')
const Company = require('./companyModel')


const Destination_Company = sequelize.define('Destination_Company', {

}, 
{ 
    timestamps: false 
});

Destination.belongsToMany(Company, { through: Destination_Company });
Company.belongsToMany(Destination, { through: Destination_Company });