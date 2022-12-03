import { Response } from "express";
declare const _default: {
    RegisterUser(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    UpdateUser(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    DeleteUser(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    ListUser(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    GetUserLogado(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    RecoverPass(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
};
export default _default;
