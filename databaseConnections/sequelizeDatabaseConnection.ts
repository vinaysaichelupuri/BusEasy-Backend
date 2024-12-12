const { Sequelize } = require('sequelize');
import * as dotenv from 'dotenv'
dotenv.config({
    override: true,
    path: '.env',
  });

const database = process.env.DATABASE_NAME|| ''
const username = process.env.DATABASE_USERNAME || '';
const password = process.env.DATABASE_PASSWORD || '';
const host = process.env.DATABASE_HOST || '';
const dialect = process.env.DATABASE_DIALECT

export const sequelizeConnection = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
});
