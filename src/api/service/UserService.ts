import UserRepository from '../repository/UserRepository';
import UserValidator from '../validator/UserValidator';
import bcryptjs from 'bcryptjs';
import moment from 'moment';
import 'dotenv/config';
import Email from '../../config/email/SendEmail';

export default new class {
    async DateNow() {
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }

    async NewToken() {
        return Math.random().toString(36).toUpperCase().slice(2);
    }

    async HtmlEmail(data: any) {
        return `
        <h2 style="color:black;font-weight: 900;">Bem Vindo, ${data.name}!</h2>
        <h3>O seu token de validação é:</h3>
        <input class="form-control" type="text" value="${data.token}" disabled>
        <h5 style="color:red">Dica: *Não compartilhe o seu token com ninguém!</h5>
        `;
    }

    async RegisterUser(data: any) {
        try {
            const checked: boolean = await UserRepository.UserExists(data.email);
            if (checked) {
                if (data.photo.trim() == '' && data.photo != undefined) data.photo = 'undefined';
                const inputsValid: string[] = await UserValidator.ValidUser(data);
                if (inputsValid.length == 0) {
                    data.created = await this.DateNow(); //data do cadastro
                    data.levelAccess = 1; //nivel de acesso
                    data.token = await this.NewToken(); //gerando token
                    data.deleted = false; //não deletado
                    data.active = true; // ativo
                    data.edited = await this.DateNow();
                    data.password = bcryptjs.hashSync(data.password, 8);
                    const user: object = await UserRepository.RegisterUser(data);
                    await Email.SendEmail(user, await this.HtmlEmail(user));
                    return UserValidator.Retorno({ code: 201, status: true, message: 'Usuário criado com sucesso.', data: user });
                } else return await UserValidator.Retorno({ code: 401, status: false, message: 'Erro de validação.', data: inputsValid });
            } else return await UserValidator.Retorno({ code: 401, status: false, message: 'E-mail já cadastrado, tente recuperar a sua senha.' });
        } catch (error) {
            console.log(error);
            return await UserValidator.Retorno({ code: 500, status: false, message: `Error Server`, data: error });
        }
    }

    async UpdateUser(data: any) {
        try {
            const inputsValid: string[] = await UserValidator.ValidUser(data);
            if (inputsValid.length == 0) {
                if (data.photo.trim() == '' && data.photo != undefined) data.photo = 'undefined';
                data.edited = await this.DateNow();
                data.password = bcryptjs.hashSync(data.password, 8);
                data.active = true; //ativo
                const update = await UserRepository.UpdateUser(data);
                return await UserValidator.Retorno({ code: 202, status: true, message: 'Usuário editado com sucesso.', data: data })
            }
            return await UserValidator.Retorno({ code: 400, status: false, message: 'Erro de validação.', data: null });
        } catch (error) {
            console.log(error);
            return await UserValidator.Retorno({ code: 500, status: false, message: 'Server Error', data: null });
        }
    }

    async DeleteUser(data: any) {
        const checked = await UserValidator.DeleteUser(data);
        try {
            if (checked) {
                const deleted = await UserRepository.DeleteUser(data.id);
                if (deleted.acknowledged) return await UserValidator.Retorno({ code: 202, status: true, message: 'Usuário deletado com sucesso.', data: { data } })
                return await UserValidator.Retorno({ code: 401, status: false, message: 'Erro ao excluir usuário.', data: null });
            } else return await UserValidator.Retorno({ code: 401, status: false, message: 'Não foi permitido exluir o usuário.', data: null });
        } catch (error) {
            console.log(error);
            return await UserValidator.Retorno({ code: 500, status: false, message: 'Server Error', data: null });
        }
    }

    async GetOneUser(data: any) {
        try {
            const checked = await UserValidator.GetOneUser(data);
            if (checked) {
                const user: any = await UserRepository.GetUser();
                return await UserValidator.Retorno({ code: 202, status: true, message: 'usuários listado com sucesso.', data: user });
            } else return await UserValidator.Retorno({ code: 401, status: false, message: 'Não foi possível listar os usuários.', data: null });
        }catch(error){
            console.log(error);
            return await UserValidator.Retorno({code: 500, status: false, message: 'Server Error', data: null});
        }
    }

}