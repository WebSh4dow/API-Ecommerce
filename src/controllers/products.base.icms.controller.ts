import { Request,Response } from "express"
import { BaseICMS } from "../entities/ReduceBaseICMS"

export const findBasesIcms = async (req:Request,res:Response) =>{
    try {
        const baseIcms = await BaseICMS.find()
        return res.json(baseIcms) 
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message:error.message}) 
        }
    }
}