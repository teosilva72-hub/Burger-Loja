import validation from "../validator/ProductValidator";
import Product from "../model/interfaces/Product";
import repositories from "../repository/ProductRepository";
import moment from "moment";
import User from "../model/interfaces/User";
export default new class {

    async dateNow() {
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }

    async response(code: number, status: boolean, message: String, data: any) {
        return {
            code: code,
            status: status,
            message: message,
            data: data
        };
    }

    async register(product: Product, user: User) {
        try {
            const check:any = await validation.register(product);
            if(check){
               
                const insert = await repositories.register(product);
                return await this.response(400, false, 'insert success', insert);
            }
            throw 'erro de validação'
        } catch (error) {
            console.log(error);
            return await this.response(400, false, `${error}`, null);
        }   
    }

    async list(){
        try{
            const list = await repositories.list();
            return await this.response(200, true, 'list success', list);
        }catch(error){
            console.log(error);
            return await this.response(400, false, `${error}`, null);
        }
    }

}