import { NextApiResponse } from "next";
import Logger from "../logger/index";


const logger = new Logger()

function Error(res:NextApiResponse, error:any){
    console.log(error);
    const statusFailed = "failed"
    var status = error.code ? error.code : 500
    if (error.code === "ER_DUP_ENTRY"){
        status = 400  
    }
    logger.Error(error)
    res.status(status).json({status: statusFailed, message: error.message})
}

export default Error
