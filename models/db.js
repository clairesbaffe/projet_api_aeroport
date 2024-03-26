const Sequelize = require('sequelize');

const db = new Sequelize("sqlite:voyages.sqlite3", {
});

module.exports = { db };