//on importe la db
const { db } = require('./db');

//on importe l'orm
const {Sequelize, DataTypes} = require('sequelize');


const Destination = db.define("Destination", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companies: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        references: {
            model: 'Company', 
            key: 'id' 
        }
    }
}, {
    //timestamps: false, //pour dire a sequelize de ne pas créer de colonnes createdAt et updatedAt
})

module.exports = { Destination };
