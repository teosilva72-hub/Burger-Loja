import UserRepository from '../repository/UserRepository';
import UserValidator from '../validator/UserValidator';
import bcryptjs from 'bcryptjs';
import moment from 'moment';
import 'dotenv/config';
import Email from '../../config/email/SendEmail';
import User from '../model/interfaces/User';
import SendEmail from '../../config/email/SendEmail';

export default new class {
    async DateNow() {
        return moment(new Date()).format('DD-MM-YYYY HH:mm:ss');
    }

    async NewToken() {
        return Math.random().toString(36).toUpperCase().slice(2);
    }

    async HtmlEmail(data:User) {
        return `
        <h2 style="color:black;font-weight: 900;">Bem Vindo, ${data.name}!</h2>
        <h3>O seu token de validação é:</h3>
        <input class="form-control" type="text" value="${data.token}" disabled>
        <h5 style="color:red">Dica: *Não compartilhe o seu token com ninguém!</h5>
        `;
    }

    async RegisterUser(data:User, files:any) {
        try {
            const checked: boolean = await UserRepository.UserExists(data.email);
            if (checked) {
                const inputsValid: string[] = await UserValidator.ValidUser(data);
                if (inputsValid.length == 0) {
                    if(data.photo == '' || data.photo == undefined) data.photo = 'undefined';
                    data.created = await this.DateNow(); //data do cadastro
                    data.levelAccess = 1; //nivel de acesso
                    data.token = await this.NewToken(); //gerando token
                    data.deleted = false; //não deletado
                    data.active = true; // ativo
                    data.edited = await this.DateNow();
                    data.password = bcryptjs.hashSync(data.password, 8);
                    if(files != undefined) data.photo = files[0].filename;
                    else if(data.photo == '') data.photo = 'undefined';
                   
                    const user:User = await UserRepository.RegisterUser(data);
                    await Email.SendEmail(user, await this.HtmlEmail(user));
                    return { code: 201, status: true, message: 'Usuário criado com sucesso.', data: user };
                } else return { code: 401, status: false, message: 'Erro de validação.', data: inputsValid };
            } else return { code: 401, status: false, message: 'E-mail já cadastrado, tente recuperar a sua senha.' };
            
        } catch (error) {
            console.log(error);
            return { code: 500, status: false, message: `Error Server`, data: error };
        }
    }

    async UpdateUser(data:User) {
        try {
            const inputsValid: string[] = await UserValidator.ValidUser(data);
            if (inputsValid.length == 0) {
                if (data.photo == '' && data.photo != undefined) data.photo = 'undefined';
                data.edited = await this.DateNow();
                data.password = bcryptjs.hashSync(data.password, 8);
                data.active = true; //ativo
                const update:User = await UserRepository.UpdateUser(data);
                return { code: 202, status: true, message: 'Usuário editado com sucesso.', data: data };
            }
            return { code: 400, status: false, message: 'Erro de validação.', data: inputsValid };
        } catch (error) {
            console.log(error);
            return { code: 500, status: false, message: 'Server Error', data: null };
        }
    }

    async DeleteUser(data:User) {
        const checked = await UserValidator.DeleteUser(data);
        try {
            if (checked) {
                const deleted = await UserRepository.DeleteUser(data.id);
                if (deleted.acknowledged) return { code: 202, status: true, message: 'Usuário deletado com sucesso.', data: { data } };
                return { code: 401, status: false, message: 'Erro ao excluir usuário.', data: null };
            } else return { code: 401, status: false, message: 'Não foi permitido exluir o usuário.', data: null };
        } catch (error) {
            console.log(error);
            return { code: 500, status: false, message: 'Server Error', data: null };
        }
    }

    async ListUser(data:User) {
        try {
            const checked = await UserValidator.GetOneUser(data);
            if (checked) {
                const user:User = await UserRepository.GetUser();
                return { code: 202, status: true, message: 'usuários listado com sucesso.', data: user };
            } else return { code: 401, status: false, message: 'Não foi possível listar os usuários.', data: null };
        }catch(error){
            console.log(error);
            return {code: 500, status: false, message: 'Server Error', data: null};
        }
    }

    async GetLogado(id:User, photo:User){
        const user = await UserRepository.GetOneUser({_id:id});
        console.log(user.photo)
        if(user) return {code:200, status:false, message: 'Usuário reconhecido.', data:user};
        else return {code:401, status:false, message: 'Erro ao trazer dados do usuário.', data:null};
    }

    async RecoverPass(data:User){
        try{
            const checked:boolean = await UserValidator.RecoverPass(data);
            if(checked){
                const user:any = await UserRepository.GetOneUser({email:data.email});
                if(user){
                    data.password = bcryptjs.hashSync('12345', 8);
                    const update = await UserRepository.RecoverPass(data);
                    data.password = '12345'
                    await Email.SendEmail(data, this.HtmlRecoverpass(data));
                    return {code:200, status:true, message:'Email de recuperação enviado', data:update};
                }else return {code: 401, status:false, message:'Email não cadastrado.', data:null};
            }else return {code: 400, status:false, message:'Email invalido.', data:null};
        }catch(error){
            console.log(error);
            return {code: 500, status: false, message:'Server Error', data:null};
        }
    }
    HtmlRecoverpass(data:User){
        return`
            <h1>A sua nova senha.</h1>
            <h2>Senha: ${data.password}</h2>
            <h3>Não compartilhe com ninguém!</h4>
        `
    }
}