import Product from '../model/interfaces/Product';
import ProductModel from '../model/ProductModel';
import ProductValidator from '../validator/ProductValidator';

export default new class{
    async RegisterProduct(data:Product){
        const db:any = await ProductModel.create(data);
        return db;
    }
    async UpdateProduct(data:Product){
        const db:any = await ProductModel.updateOne(data);
        return db;
    }
    async ListProduct(data:Product){
        const db:any = await ProductModel.find(data);
        return db;
    }
    async GetOneProduct(id:string){
       try{
        const db = await ProductModel.findById({_id:id});
        return db;
       }catch(error){
        return [];
       }
    }
    async DeleteProduct(data:Product){
        const db:any = await ProductModel.deleteOne(data);
        return db;
    }
}