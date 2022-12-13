import {Request, Response} from 'express';
import service from '../service/ProductService';
import Product from '../model/interfaces/Product';
import User from '../model/interfaces/User';
export default new class{

    async ResgisterProduct(req:any, res:Response){
        const data:Product = req.body;
        const user:User = req;
        const retorno:any = await service.register(data, user);
        return res.status(retorno.code).json(retorno);
    }

    async List(req:any, res:Response){
        const retorno = await service.list();
        return res.status(retorno.code).json(retorno);
    }

}