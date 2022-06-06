import { NextApiRequest, NextApiResponse } from 'next';

import { Weapon } from 'src/db/model';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  Weapon.getAll().then((weapons) => {
    res.status(200).json(weapons);
  });
}
