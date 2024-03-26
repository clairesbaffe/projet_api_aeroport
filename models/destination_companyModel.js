// Import des modèles
const { db } = require('./db');
const { Sequelize, DataTypes } = require('sequelize');
const { Destination } = require('./destinationModel');
const { Company } = require('./companyModel');

// Définition de l'entité de jointure
const DestinationCompany = db.define("DestinationCompany", {
    DestinationId: {
        type: DataTypes.INTEGER,
        references: {
            model: Destination,
            key: 'id'
        },
        allowNull: false
    },
    CompanyId: {
        type: DataTypes.INTEGER,
        references: {
            model: Company,
            key: 'id'
        },
        allowNull: false
    }
}, {});

// Création de la table dans la base de données
//DestinationCompany.sync();

// Export du modèle d'association
module.exports = { DestinationCompany };
