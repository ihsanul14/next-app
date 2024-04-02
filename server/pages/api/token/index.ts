import { NextApiRequest, NextApiResponse } from 'next';
import Jwt from '@/application/middleware/jwt';
import Error from '@/framework/error';

export const jwt = new Jwt() 
const success = 'success' 

export default async function GetToken(req: NextApiRequest, res: NextApiResponse) {
    try {
      const data = await jwt.generateToken()
      res.json({status:success,data: {"token": data}});
    } catch (err) {
        Error(res, err)
    }
}
