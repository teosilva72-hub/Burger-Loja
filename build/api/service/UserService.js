"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../repository/UserRepository"));
const UserValidator_1 = __importDefault(require("../validator/UserValidator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const moment_1 = __importDefault(require("moment"));
require("dotenv/config");
const SendEmail_1 = __importDefault(require("../../config/email/SendEmail"));
exports.default = new class {
    DateNow() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, moment_1.default)(new Date()).format('DD-MM-YYYY HH:mm:ss');
        });
    }
    NewToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return Math.random().toString(36).toUpperCase().slice(2);
        });
    }
    HtmlEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return `
        <h2 style="color:black;font-weight: 900;">Bem Vindo, ${data.name}!</h2>
        <h3>O seu token de validação é:</h3>
        <input class="form-control" type="text" value="${data.token}" disabled>
        <h5 style="color:red">Dica: *Não compartilhe o seu token com ninguém!</h5>
        `;
        });
    }
    RegisterUser(data, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checked = yield UserRepository_1.default.UserExists(data.email);
                if (checked) {
                    const inputsValid = yield UserValidator_1.default.ValidUser(data);
                    if (inputsValid.length == 0) {
                        if (data.photo == '' || data.photo == undefined)
                            data.photo = 'undefined';
                        data.created = yield this.DateNow(); //data do cadastro
                        data.levelAccess = 1; //nivel de acesso
                        data.token = yield this.NewToken(); //gerando token
                        data.deleted = false; //não deletado
                        data.active = true; // ativo
                        data.edited = yield this.DateNow();
                        data.password = bcryptjs_1.default.hashSync(data.password, 8);
                        if (files != undefined)
                            data.photo = files[0].filename;
                        else if (data.photo == '')
                            data.photo = 'undefined';
                        const user = yield UserRepository_1.default.RegisterUser(data);
                        yield SendEmail_1.default.SendEmail(user, yield this.HtmlEmail(user));
                        return { code: 201, status: true, message: 'Usuário criado com sucesso.', data: user };
                    }
                    else
                        return { code: 401, status: false, message: 'Erro de validação.', data: inputsValid };
                }
                else
                    return { code: 401, status: false, message: 'E-mail já cadastrado, tente recuperar a sua senha.' };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: `Error Server`, data: error };
            }
        });
    }
    UpdateUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputsValid = yield UserValidator_1.default.ValidUser(data);
                if (inputsValid.length == 0) {
                    if (data.photo == '' && data.photo != undefined)
                        data.photo = 'undefined';
                    data.edited = yield this.DateNow();
                    data.password = bcryptjs_1.default.hashSync(data.password, 8);
                    data.active = true; //ativo
                    const update = yield UserRepository_1.default.UpdateUser(data);
                    return { code: 202, status: true, message: 'Usuário editado com sucesso.', data: data };
                }
                return { code: 400, status: false, message: 'Erro de validação.', data: inputsValid };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: null };
            }
        });
    }
    DeleteUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const checked = yield UserValidator_1.default.DeleteUser(data);
            try {
                if (checked) {
                    const deleted = yield UserRepository_1.default.DeleteUser(data.id);
                    if (deleted.acknowledged)
                        return { code: 202, status: true, message: 'Usuário deletado com sucesso.', data: { data } };
                    return { code: 401, status: false, message: 'Erro ao excluir usuário.', data: null };
                }
                else
                    return { code: 401, status: false, message: 'Não foi permitido exluir o usuário.', data: null };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: null };
            }
        });
    }
    ListUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checked = yield UserValidator_1.default.GetOneUser(data);
                if (checked) {
                    const user = yield UserRepository_1.default.GetUser();
                    return { code: 202, status: true, message: 'usuários listado com sucesso.', data: user };
                }
                else
                    return { code: 401, status: false, message: 'Não foi possível listar os usuários.', data: null };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: null };
            }
        });
    }
    GetLogado(id, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserRepository_1.default.GetOneUser({ _id: id });
            console.log(user.photo);
            if (user)
                return { code: 200, status: false, message: 'Usuário reconhecido.', data: user };
            else
                return { code: 401, status: false, message: 'Erro ao trazer dados do usuário.', data: null };
        });
    }
    RecoverPass(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checked = yield UserValidator_1.default.RecoverPass(data);
                if (checked) {
                    const user = yield UserRepository_1.default.GetOneUser({ email: data.email });
                    if (user) {
                        data.password = bcryptjs_1.default.hashSync('12345', 8);
                        const update = yield UserRepository_1.default.RecoverPass(data);
                        data.password = '12345';
                        yield SendEmail_1.default.SendEmail(data, this.HtmlRecoverpass(data));
                        return { code: 200, status: true, message: 'Email de recuperação enviado', data: update };
                    }
                    else
                        return { code: 401, status: false, message: 'Email não cadastrado.', data: null };
                }
                else
                    return { code: 400, status: false, message: 'Email invalido.', data: null };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: null };
            }
        });
    }
    HtmlRecoverpass(data) {
        return `
            <h1>A sua nova senha.</h1>
            <h2>Senha: ${data.password}</h2>
            <h3>Não compartilhe com ninguém!</h4>
        `;
    }
};
