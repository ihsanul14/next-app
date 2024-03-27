import { NextApiRequest, NextApiResponse } from 'next';
import Logger from '@/framework/logger';

const logger = new Logger()
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  logger.Info("Hello")
  res.status(200).json({ message: 'Hello from the API!' });
}
