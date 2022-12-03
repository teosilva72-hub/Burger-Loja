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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new class {
    Retorno(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                code: data.code,
                status: data.status,
                message: data.message,
                data: data.data
            };
        });
    }
    ValidUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg = '';
            if (data.name == '')
                msg += 'Nome é um campo obrigatório.';
            if (data.nickName == '')
                msg += 'Nickname é um campo obrigatório.';
            if (data.email == '')
                msg += 'Email é um campo obrigatório.';
            else {
                const checked = yield this.EmailValidator(data.email);
                if (!checked)
                    msg += 'Email inválido.';
            }
            if (data.password == '')
                msg += 'Senha é um campo obrigatório.';
            if (data.sex == '')
                msg += 'Sexo é um campo obrigatório.';
            if (data.birth == '')
                msg += 'Data nascimento é um campo obrigatório.';
            if (data.cell == '')
                msg += 'Celular é um campo obrigatório.';
            let ArrayMsg = msg.split('.');
            const Retorno = ArrayMsg.filter(function (i) {
                return i;
            });
            return Retorno;
        });
    }
    EmailValidator(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = /\S+@\S+\.\S+/;
            return result.test(data);
        });
    }
    UserExists(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data == null)
                return true;
            else
                return false;
        });
    }
    DeleteUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.deleted)
                return true;
            else
                return false;
        });
    }
    GetOneUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.id == '' || data.id == undefined)
                return false;
            else if (data.level == '' || data.level == undefined || data.level == 1)
                return false;
            else
                return true;
        });
    }
    RecoverPass(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const check = yield this.EmailValidator(data.email);
            if (check)
                return true;
            else
                return false;
        });
    }
};
