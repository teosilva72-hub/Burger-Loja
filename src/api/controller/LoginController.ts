import {Request, Response} from 'express';
import LoginService from '../service/LoginService';

export default new class{
    async Login(req:Request, res:Response){
        const retorno = await LoginService.Login(req.body);
        return res.status(retorno?.code).json(retorno);
    }
}