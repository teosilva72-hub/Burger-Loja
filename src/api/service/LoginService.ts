import bcrypt from 'bcryptjs';
import LoginValidator from '../validator/LoginValidator';
import UserRepository from '../repository/UserRepository';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default new class{
    async Login(data: any){
        try{
            const check:string[] = await LoginValidator.VerifyAccess(data);
            if(check.length == 0){
                const user:any = await UserRepository.GetOneUser(data.email);
                const checked:boolean = await LoginValidator.UserExists(user);
                if(checked){
                    if(!(await bcrypt.compare(data.password, user.password)))
                    return LoginValidator.Retorno({code: 401, status:false, message: 'Senha inválida.', data: null});
                    const token = jwt.sign({
                        id:user.id, name:user.name, email:user.email, nickname:user.nickName, access:user.levelAccess}, 
                        `${process.env.SECRET}`,{
                            expiresIn: '8h'
                    });
                    return LoginValidator.Retorno({code: 200, status: true, message: 'Login realizado com sucesso.', data: token})
                }else return LoginValidator.Retorno({code: 401, status: false, message: 'Usuário não registrado.', data: null});
            }else return await LoginValidator.Retorno({code: 401, status: false, message: 'Erro de validação', data: check});
        }catch(error){
            console.log(error);
            return await LoginValidator.Retorno({code: 401, status: false, message: 'Server Error', data: null});
        }
    }
}