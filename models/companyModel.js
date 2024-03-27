//on importe la db
const { db } = require('./db');

//on importe l'orm
const {Sequelize, DataTypes} = require('sequelize');


const Company = db.define("Company", {
    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalite:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = { Company };
