//on importe la db
const { db } = require("./db");

//on importe l'orm
const { DataTypes } = require("sequelize");

const Flight = db.define(
  "Flight",
  {
    depart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrivee: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminalDepart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminalArrivee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    compan: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      //allowNull: false,
      references: {
        model: "Companies",
        key: "id",
      },
    },
    destinationDepart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destinationArrivee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //timestamps: false, //pour dire a sequelize de ne pas créer de colonnes createdAt et updatedAt
  }
);

module.exports = { Flight };
