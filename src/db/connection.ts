import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

const { DB_CONNECTION_STRING } = process.env;

export const db = new Sequelize(DB_CONNECTION_STRING);
