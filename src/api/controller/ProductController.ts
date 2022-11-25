import {Request, Response} from 'express';
import ProductService from '../service/ProductService';
import Product from '../model/interfaces/Product';
export default new class{
    async ResgisterProduct(req:Request, res:Response){
        const data:Product = req.body;
        const retorno = await ProductService.RegisterProduct(data);
        return res.status(200).json('teste')
    }

    async UpdateProduct(req:any, res:Response){

    }

    async DeleteProduct(req:any, res:Response){

    }

    async ListProduct(req:any, res:Response){
        
    }


}