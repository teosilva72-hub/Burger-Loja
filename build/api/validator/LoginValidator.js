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
    VerifyAccess(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg = '';
            const obj = data;
            if (obj.email == undefined)
                msg += 'Campo email não encontrado.';
            if (obj.password == undefined)
                msg += 'Campo senha não encontado.';
            if (obj.email == '')
                msg += 'Email é um campo obrigatório.';
            else {
                const checked = yield this.EmailValidator(obj.email);
                if (!checked)
                    msg += 'Email inválido.';
            }
            if (obj.password == '')
                msg += 'Senha é um campo obrigatório.';
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
            return yield result.test(data);
        });
    }
    UserExists(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data === null)
                return false;
            else
                return true;
        });
    }
};
