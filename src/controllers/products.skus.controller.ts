import { Request,Response } from "express"
import {DistributionCenterList, SKU} from "../entities/ProductsSKU"

export const findSku = async(req:Request,res:Response)=>{
    try{
        const productSku = await SKU.find()
        return res.send(productSku)
    }catch(error){
        if(error instanceof Error)
        return res.status(500).json({message:error.message})
    }
}

export const findDistributionCenter = async(req:Request,res:Response)=>{
    try {
        const distributionCenter = await DistributionCenterList.find()
        res.send(distributionCenter)  
    } catch (error) {
        if(error instanceof Error)
        return res.status(500).json({message:error.message})  
    }
}