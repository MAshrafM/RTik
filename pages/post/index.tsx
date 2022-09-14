import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client'
import { allPostQuery } from '../../utils/queries'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'GET'){
    const q = allPostQuery();
    const data = await client.fetch(q);
    res.status(200).json(data);
  }
}
