import { DataTypes } from 'sequelize';

import { db } from '../connection';

export const WeaponModel = db.define(
  'weapon',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,
  },
);
