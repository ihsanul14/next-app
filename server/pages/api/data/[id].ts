import { NextApiRequest, NextApiResponse } from 'next';
import { controller } from '.';
import Error from '@/framework/error';

const success = 'success' 
const HttpMethod = {
  get: "GET",
  put: "PUT",
  delete: "DELETE"
}

export default async function HandlerById(req: NextApiRequest, res: NextApiResponse) {
  try {
      switch (req.method){
        case HttpMethod.put:
          const dataPut = await controller.Data.UpdateData(parseInt(req.query.id as string), req.body)
          return res.json({status:success,message: "success update data", data: {"id": dataPut}});
        case HttpMethod.delete:
          const dataDelete = await controller.Data.DeleteData(parseInt(req.query.id as string))
          return res.json({status:success,message: "success delete data", data: {"id": dataDelete}});
        default:
          const data = await controller.Data.GetDataById(parseInt(req.query.id as string))
          return res.json({status: success, data:data});
        }
      } catch (err) {
          Error(res, err)
      }
}
