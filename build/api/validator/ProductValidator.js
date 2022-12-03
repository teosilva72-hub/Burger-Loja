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
    ValidaBody(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg = '';
            if (data.categoria.trim() == '' || data.categoria.trim() == undefined)
                msg += 'Categoria é um campo obrigatório.';
            else if (data.nome.trim() == '' || data.nome.trim() == undefined)
                msg += 'Nome é um campo obrigatório.';
            else if (data.marca.trim() == '' || data.marca.trim() == undefined)
                msg += 'Marca é um campo obrigatório.';
            else if (data.descricao.trim() == '' || data.descricao.trim() == undefined)
                msg += 'Descrição é um campo obrigatório.';
            else if (data.dt_fabricacao.trim() == '' || data.dt_fabricacao.trim() == undefined)
                msg += 'Data de fabricação é um campo obrigatório.';
            else if (data.dt_validade.trim() == '' || data.dt_validade.trim() == undefined)
                msg += 'Data de validade é um campo obrigatório.';
            else if (data.valor.trim() == '' || data.valor == undefined)
                msg += 'Valor do produto é um campo obrigatório.';
            let ArrayMsg = msg.split('.');
            const Retorno = ArrayMsg.filter(function (i) {
                return i;
            });
            return Retorno;
        });
    }
};
