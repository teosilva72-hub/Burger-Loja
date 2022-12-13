import Product from '../model/interfaces/Product';
import ProductModel from '../model/ProductModel';
import ProductValidator from '../validator/ProductValidator';

export default new class{

    async register(data:Product){
        const db:any = await ProductModel.create(data);
        return db;
    }

    async list(){
        const db:any = await ProductModel.find();
        return db;
    }
    
}