import { Request,Response } from "express"
import { ProductsLenght } from "../entities/ProductsLength";
import {PropertiesProducts} from "../entities/ProductsProperties"
import { ProductsValuesProperties } from "../entities/ProductsValues";


export const findPropertiesProducts = async (req:Request,res:Response) =>{
    try {
        const propertiesProduct = await PropertiesProducts.find()
        return res.json(propertiesProduct) 
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message:error.message}) 
        }
    }
}

export const findPropertiesProductsBy = async (req:Request,res:Response)=>{
    try {
    const propertiesProduct = await PropertiesProducts.findBy({referenceCode: req.params.referenceCode})
        return res.json(propertiesProduct) 
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message:error.message}) 
        }
    }
}

export const findPropertiesProductsByleght = async(req:Request,res:Response)=>{
    try {
        const propertiesProduct = await ProductsLenght.findBy({referenceCode: req.params.referenceCode})
            return res.json(propertiesProduct) 
        } catch (error) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message}) 
            }
        }
}

export const findAllPropertiesProductsByleght = async(req:Request,res:Response)=>{
    try {
        const propertiesProduct = await ProductsLenght.find()
            return res.json(propertiesProduct) 
        } catch (error) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message}) 
            }
        }
}

export const findValuesPropertiesProducts = async(req:Request,res:Response)=>{
    try {
        const valueProducts = await ProductsValuesProperties.find()
            return res.json(valueProducts) 
        } catch (error) {
            if(error instanceof Error){
                return res.status(500).json({message:error.message}) 
            }
        }
}