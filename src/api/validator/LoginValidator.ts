
export default new class{
    
    async Retorno(data:any){
        return{
            code: data.code,
            status: data.status,
            message: data.message,
            data: data.data
        }
    }

    async VerifyAccess(data:object){
        let msg = '';
        const obj:any = data;
        if(obj.email == undefined) msg += 'Campo email não encontrado.';
        if(obj.password == undefined) msg += 'Campo senha não encontado.';
        if(obj.email == '') msg += 'Email é um campo obrigatório.';
        else{
            const checked = await this.EmailValidator(obj.email);
            if(!checked) msg += 'Email inválido.'
        }
        if(obj.password == '') msg += 'Senha é um campo obrigatório.';
        let ArrayMsg:string[] = msg.split('.');
        const Retorno:string[] = ArrayMsg.filter(function (i) {
            return i;
        });
        return Retorno;
    }

    async EmailValidator(data:string){
        const result = /\S+@\S+\.\S+/;
        return await result.test(data);
    }

    async UserExists(data:object){
        if(data === null) return false;
        else return true;
    }
}