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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const LoginValidator_1 = __importDefault(require("../validator/LoginValidator"));
const UserRepository_1 = __importDefault(require("../repository/UserRepository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
exports.default = new class {
    Login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const check = yield LoginValidator_1.default.VerifyAccess(data);
                if (check.length == 0) {
                    const user = yield UserRepository_1.default.GetOneUser({ email: data.email });
                    const checked = yield LoginValidator_1.default.UserExists(user);
                    if (checked) {
                        if (!(yield bcryptjs_1.default.compare(data.password, user.password)))
                            return LoginValidator_1.default.Retorno({ code: 401, status: false, message: 'Senha inválida.', data: null });
                        const token = jsonwebtoken_1.default.sign({
                            id: user.id, name: user.name, email: user.email, nickname: user.nickName, access: user.levelAccess
                        }, `${process.env.SECRET}`, {
                            expiresIn: '8h'
                        });
                        return LoginValidator_1.default.Retorno({ code: 200, status: true, message: 'Login realizado com sucesso.', data: token });
                    }
                    else
                        return LoginValidator_1.default.Retorno({ code: 401, status: false, message: 'Usuário não registrado.', data: null });
                }
                else
                    return yield LoginValidator_1.default.Retorno({ code: 401, status: false, message: 'Erro de validação', data: check });
            }
            catch (error) {
                console.log(error);
                return yield LoginValidator_1.default.Retorno({ code: 401, status: false, message: 'Server Error', data: null });
            }
        });
    }
};
