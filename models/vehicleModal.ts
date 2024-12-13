const { DataTypes } = require('sequelize');
import { sequelizeConnection } from "../databaseConnections/sequelizeDatabaseConnection";
export const Vehicle = sequelizeConnection.define('Vehicle', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  available: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});