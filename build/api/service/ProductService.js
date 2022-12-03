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
const ProductValidator_1 = __importDefault(require("../validator/ProductValidator"));
const ProductRepository_1 = __importDefault(require("../repository/ProductRepository"));
const moment_1 = __importDefault(require("moment"));
exports.default = new class {
    DateNow() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, moment_1.default)(new Date()).format('YYYY-MM-DD HH:mm:ss');
        });
    }
    RegisterProduct(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (user.access == 2) {
                    const checked = yield ProductValidator_1.default.ValidaBody(data);
                    if (checked.length == 0) {
                        data.created = yield this.DateNow();
                        data.active = true;
                        data.userCreated = user.id;
                        data.deleted = false;
                        data.edited = "";
                        const created = yield ProductRepository_1.default.RegisterProduct(data);
                        return { code: 201, status: true, message: 'Produto criado com sucesso!', data: created };
                    }
                    else
                        return { code: 400, status: false, message: '*Campos obrigatórios!', data: checked };
                }
                else
                    return { code: 401, status: false, message: 'Usuário não tem autorização para criar produto!' };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: error };
            }
        });
    }
    UpdateProduct(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (user.access == 1) {
                    const checked = yield ProductValidator_1.default.ValidaBody(data);
                    if (checked.length == 0) {
                        data.edited = yield this.DateNow();
                        data.userEdited = user.id;
                        const getProd = yield ProductRepository_1.default.GetOneProduct(data.id);
                        console.log(getProd);
                        if (getProd.length == 0)
                            return { code: 400, status: false, message: 'Produto não encontrado.' };
                        else {
                            const update = yield ProductRepository_1.default.UpdateProduct(data);
                            return { code: 200, status: true, message: 'Produto atualizado com sucesso', data: update };
                        }
                    }
                    else
                        return { code: 400, status: false, message: '*Campos obrigatórios', data: checked };
                }
                else
                    return { code: 401, status: false, message: 'Usuário não tem autorização para editar produto!' };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: error };
            }
        });
    }
    ListProduct(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield ProductRepository_1.default.ListProduct();
                const check = Object.values(list);
                if (check.length == 0)
                    return { code: 400, status: false, message: 'Nenhum produto para ser listado.' };
                else
                    return { code: 200, status: true, message: 'Produto listado com sucesso', data: list };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: null };
            }
        });
    }
    DeleteProduct(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (user.access == 1) {
                    const getProd = yield ProductRepository_1.default.GetOneProduct(data.id);
                    if (getProd.length == 0)
                        return { code: 400, status: false, message: 'Produto não encontrado.', data: null };
                    else {
                        const deleted = yield ProductRepository_1.default.DeleteProduct(data);
                        return { code: 200, status: true, message: 'Produto deletado com sucesso', data: deleted };
                    }
                }
                else
                    return { code: 401, status: false, message: 'Usuário não tem autorização para deletar produtos.', data: null };
            }
            catch (error) {
                console.log(error);
                return { code: 500, status: false, message: 'Server Error', data: error };
            }
        });
    }
};
