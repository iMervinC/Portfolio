import type { NextApiRequest, NextApiResponse } from 'next'
import proj from '@/data.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(proj)
}
