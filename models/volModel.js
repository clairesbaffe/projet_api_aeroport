//on importe la db
const { db } = require('./db');

//on importe l'orm
const {Sequelize, DataTypes} = require('sequelize');


const Vol = db.define("Vol", {
    depart: {
        type: DataTypes.DATE,
        allowNull: false
    },
    arrivee: {
        type: DataTypes.DATE,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    terminalDepart: {
        type: DataTypes.STRING,
        allowNull: false
    },
    terminalArrivee: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Company', 
            key: 'id'
        }
    },
    destinationDepart: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destinationArrivee: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    //timestamps: false, //pour dire a sequelize de ne pas créer de colonnes createdAt et updatedAt
})

module.exports = { Vol };
