import { DataTypes } from 'sequelize';

import { db } from '../connection';

const PassiveItemModel = db.define(
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

export const PassiveItem = {
  getAll: () =>
    new Promise((resolve, reject) => {
      PassiveItemModel.findAll()
        .then((passiveItems) => resolve(passiveItems))
        .catch((error) => reject(error));
    }),
};
