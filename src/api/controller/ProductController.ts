import {Request, Response} from 'express';
import ProductService from '../service/ProductService';
import Product from '../model/interfaces/Product';
import User from '../model/interfaces/User';
export default new class{
    async ResgisterProduct(req:any, res:Response){
        const data:Product = req.body;
        const user:User = req;
        const retorno:any = await ProductService.RegisterProduct(data, user);
        return res.status(retorno.code).json(retorno);
    }

    async UpdateProduct(req:any, res:Response){
        const data:Product = req.body;
        data.id = req.params.id;
        const user:User = req;
        const retorno:any = await ProductService.UpdateProduct(data, user);
        return res.status(retorno.code).json(retorno);
    }

    async DeleteProduct(req:any, res:Response){
        const data:Product = req.body;
        data.id = req.params.id;
        const user:User = req;
        const retorno = await ProductService.DeleteProduct(data, user);
        return res.status(retorno.code).json(retorno);
    }

    async ListProduct(req:any, res:Response){
        const data:Product = req;
        const user:User = req;
        const retorno = await ProductService.ListProduct(data, user);
        res.status(retorno.code).json(retorno);
    }

    async setFile(req:any, res:Response){
        try{
            return res.status(200).json('sucess')
        }catch(error){
            console.log(error)
            return res.status(200).json('error')
        }
    }
}