import Product from "../model/interfaces/Product";
import User from "../model/interfaces/User";
export default new class{
   
    async register(data:Product){
        let value = Object.values(data);
        for(var i = 0; i < value.length;i++){
            if(value[i] == '') throw 'verifique se todos os campos estão preenchidos corretamente'
        }
        return true;
    }

}