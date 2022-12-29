import { Request,Response } from "express"
import { ProductsCenterDistribution } from "../entities/ProductsCenterDistribution"


export const findProductsDistributionCenter = async (req:Request,res:Response) =>{
      const findProductsDistributionCenter = await ProductsCenterDistribution.find()
      res.send(findProductsDistributionCenter)
}

