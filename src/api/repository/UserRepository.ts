import UserModel from "../model/UserModel";
import UserValidator from "../validator/UserValidator";

export default new class{
    async RegisterUser(data:any){
       const db:any = await UserModel.create(data);
       return db;
    }
    async UserExists(data:string){
        const user:any = await UserModel.findOne({email:data});
        return await UserValidator.UserExists(user);
    }

    async GetOneUser(data:any){
        const db:any = await UserModel.findOne(data);
        return db;
    }

    async UpdateUser(data:any){
        const db:any = await UserModel.updateOne({_id:data.id}, data);
        return db;
    }

    async RecoverPass(data:any){
        console.log(data)
        const db:any = await UserModel.updateOne({email:data.email}, data);
        return db;
    }

    async DeleteUser(data:string){
        const db = await UserModel.deleteOne({_id:data});
        return db;
    }

    async GetUser(){
        const db:any = await UserModel.find();
        return db;
    }


}