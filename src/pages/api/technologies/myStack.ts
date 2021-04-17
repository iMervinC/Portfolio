import type { NextApiRequest, NextApiResponse } from 'next'
import tech from '@/techStack.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(tech)
}
