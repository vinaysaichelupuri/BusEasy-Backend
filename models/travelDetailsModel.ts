const { DataTypes } = require('sequelize');
import { sequelizeConnection } from "../databaseConnections/sequelizeDatabaseConnection";
import { User } from "./userModel";
import { Vehicle } from "./vehicleModal";

export const TravelDetails = sequelizeConnection.define('travelDetails', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  journeyDate: {
    type: DataTypes.DATE,
    unique: true,
    allowNull: false,
  },
  source: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  numberOfTickets: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
});

TravelDetails.belongsTo(User, { foreignKey: 'userId' });
TravelDetails.belongsTo(Vehicle, { foreignKey: 'vehicleId' });
