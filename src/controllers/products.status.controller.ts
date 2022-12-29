import { Request,Response } from "express"
import { Status } from "../entities/ProductStatus"

export const findStatusProducts = async(req:Request,res:Response)=>{
    const findStatus = await Status.find()
    res.send(findStatus)
}