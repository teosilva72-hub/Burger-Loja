import User from "../model/interfaces/User";

export default new class{
    async Retorno(data:any){
        return{
            code: data.code,
            status: data.status,
            message: data.message,
            data: data.data
        }
    }
    async ValidUser(data:any){
        let msg = '';
        if(data.name == '') msg += 'Nome é um campo obrigatório.';
        if(data.nickName == '') msg += 'Nickname é um campo obrigatório.';
        if(data.email == '') msg += 'Email é um campo obrigatório.';
        else{
            const checked = await this.EmailValidator(data.email);
            if(!checked) msg += 'Email inválido.'
        }
        if(data.password == '') msg += 'Senha é um campo obrigatório.';
        if(data.sex == '') msg += 'Sexo é um campo obrigatório.';
        if(data.birth == '') msg += 'Data nascimento é um campo obrigatório.';
        if(data.cell == '') msg += 'Celular é um campo obrigatório.';
        let ArrayMsg = msg.split('.');
        const Retorno:string[] = ArrayMsg.filter(function (i) {
            return i;
        });
        return Retorno;
    }

    async EmailValidator(data:string){
        const result = /\S+@\S+\.\S+/;
        return result.test(data);
    }

    async UserExists(data:object){
        if(data == null) return true;
        else return false;
    }

    async DeleteUser(data:any){
        if(data.deleted) return true;
        else return false;
    }

    async GetOneUser(data:any){
        if(data.id == '' || data.id == undefined) return false;
        else if(data.level == '' || data.level == undefined || data.level == 1) return false;
        else return true;
    }

    async RecoverPass(data:User){
        const check = await this.EmailValidator(data.email);
        if(check) return true;
        else return false;
    }
}