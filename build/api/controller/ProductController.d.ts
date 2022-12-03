import { Response } from 'express';
declare const _default: {
    ResgisterProduct(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    UpdateProduct(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    DeleteProduct(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    ListProduct(req: any, res: Response): Promise<void>;
    setFile(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
};
export default _default;
