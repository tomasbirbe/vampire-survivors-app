import { DataTypes } from 'sequelize';

import { db } from '../connection';

export const PassiveItemModel = db.define(
  'passive_item',
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
