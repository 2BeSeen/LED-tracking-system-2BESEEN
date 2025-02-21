import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const workLog = await prisma.workLog.create({
        data: req.body,
      })
      res.status(200).json(workLog)
    } catch (error) {
      res.status(500).json({ error: 'Error creating work log' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
