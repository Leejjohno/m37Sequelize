const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Director = sequelize.define("Director", {
    fullName: {
        type: DataTypes.STRING,
        notNull: true
    },
    directorID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
});

module.exports = Director