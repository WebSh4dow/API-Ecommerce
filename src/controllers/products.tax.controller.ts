import { Request,Response } from "express"
import { taxProduct } from "../entities/ProductsTax"

export const findTaxProducts = async(req:Request,res:Response)=>{
    const productsTax = await taxProduct.find()
    res.send(productsTax) 
}