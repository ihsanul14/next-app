import { NextApiRequest, NextApiResponse } from 'next';
import Logger from '@/framework/logger';
import Controller from '@/application/controller';
import Jwt from '@/application/middleware/jwt';
import { DataController } from '@/application/controller/data';
import Validator from '@/application/middleware/validator';
import Error from '@/framework/error';

export const dataController = new DataController()
export const controller = new Controller(dataController)
export const validator = new Validator()
export const jwt = new Jwt() 
export const logger = new Logger()

const HttpGet = "GET"
const HttpPost = "POST"
const success = 'success' 

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method){
      case HttpPost:
        var data = await controller.Data.CreateData(req.body)
        return res.json({status:success, message: "success create data", data: {"nama": data}});
      default:
        var data = await controller.Data.GetData()
        return res.json({status: "success", data:data});
    }
  } catch (err) {
      Error(res, err)
  }
}