import { Request, Response } from "express"
import UserService from '../service/UserService';
export default new class {

    async RegisterUser(req: Request, res: Response) {
        const retorno:any = await UserService.RegisterUser(req.body);
        return res.status(retorno?.code).json(retorno);
    }

    async UpdateUser(req:any, res:Response){
        let data:any = req.body;
        data.id = req.id;
        const retorno:any = await UserService.UpdateUser(data);
        return res.status(retorno?.code).json({retorno});
    }

    async DeleteUser(req:any, res:Response){
        let data:any = req.body;
        data.id = req.id;
        data.name = req.name;
        data.email = req.email;
        const retorno = await UserService.DeleteUser(data);
        return res.status(retorno?.code).json({retorno});
    }

    async ListUser(req:any, res:Response){
        let data:any = req.params;
        data.level = req.access;
        data.id = req.id;  
        const retorno = await UserService.GetOneUser(data);
        return res.status(retorno.code).json(retorno);
    }
}