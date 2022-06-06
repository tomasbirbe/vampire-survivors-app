import { DataTypes } from 'sequelize';

import { db } from '../connection';

const WeaponsModel = db.define(
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

export const Weapon = {
  getAll: () =>
    new Promise((resolve, reject) => {
      WeaponsModel.findAll()
        .then((weapons) => resolve(weapons))
        .catch((error) => reject(error));
    }),
};
