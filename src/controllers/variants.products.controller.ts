import { Request,Response } from "express"
import { Product } from "../entities/Products"


export const createProducts = async (req:Request,res:Response) => {
    const products = await Product.create(req.body)
    const result = await Product.save(products)
    res.json({message:"Produto Criado Com Sucesso",products:result})
    
}

export const  updateProducts = async(req:Request,res:Response) =>{
    const products = await Product.findOneBy({id:parseInt(req.params.id)});
    Product.merge(products,req.body)
    const result = await Product.save(products)
    res.json({message:"Produto Atualizado Com Sucesso",products:result})
}

export const findProducts = async(req:Request,res:Response)=>{
    const products = await Product.find()
    res.send(products) 
}