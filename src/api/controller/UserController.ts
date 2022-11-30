import { Request, Response } from "express"
import UserService from '../service/UserService';
import User from "../model/interfaces/User";
export default new class {

    async RegisterUser(req: any, res: Response) {
        const retorno:any = await UserService.RegisterUser(req.body, req.files);
        return res.status(retorno?.code).json(retorno);
    }

    async UpdateUser(req:any, res:Response){
        let data:User = req.body;
        data.id = req.id;
        const retorno:any = await UserService.UpdateUser(data);
        return res.status(retorno?.code).json({retorno});
    }

    async DeleteUser(req:any, res:Response){
        let data:User = req.body;
        data.id;
        data.name = req.name;
        data.email = req.email;
        const retorno:any = await UserService.DeleteUser(data);
        return res.status(retorno?.code).json({retorno});
    }

    async ListUser(req:any, res:Response){
        let data:User = req.params;
        data.level = req.access;
        data.id = req.id;  
        const retorno:any = await UserService.ListUser(data);
        return res.status(retorno.code).json(retorno);
    }

    async GetUserLogado(req:any, res:Response){
        console.log('aqui')
        const id:User = req.id;
        const photo:User = req.query;
        const retorno = await UserService.GetLogado(id, photo);
        return res.status(retorno.code).json(retorno);
    }
}