//on importe la db
const { db } = require('./db');
const {company} = require('./companyModel')

//on importe l'orm
const {Sequelize, DataTypes} = require('sequelize');


const Destination = db.define("Destination", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
})

Destination.associate = (models) => {
    Destination.belongsTo(models.company, {
        as: "destinationCompanies",
        foreignKey: 'id'
    })
}

module.exports = { Destination };
