//on importe la db
const { db } = require("./db");

//on importe l'orm
const { DataTypes } = require("sequelize");

const Flight = db.define(
  "Flight",
  {
    departureDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrivalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departureTerminal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrivalTerminal: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    //timestamps: false,
  }
);

module.exports = { Flight };
