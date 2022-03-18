const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Shirt extends Model { }

Shirt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgur_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'artist',
  }
);

module.exports = Artist;