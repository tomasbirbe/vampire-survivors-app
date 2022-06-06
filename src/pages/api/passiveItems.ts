import { NextApiRequest, NextApiResponse } from 'next';

import { PassiveItem } from 'src/db/model';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  PassiveItem.getAll().then((passiveItems) => {
    res.status(200).json(passiveItems);
  });
}
